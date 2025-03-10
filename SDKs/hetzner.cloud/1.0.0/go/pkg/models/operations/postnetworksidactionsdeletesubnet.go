// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type PostNetworksIDActionsDeleteSubnetDeleteSubnetRequest struct {
	// IP range of subnet to delete
	IPRange string `json:"ip_range"`
}

type PostNetworksIDActionsDeleteSubnetRequest struct {
	RequestBody *PostNetworksIDActionsDeleteSubnetDeleteSubnetRequest `request:"mediaType=application/json"`
	// ID of the Network
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

// PostNetworksIDActionsDeleteSubnetActionResponseActionError - Error message for the Action if error occurred, otherwise null
type PostNetworksIDActionsDeleteSubnetActionResponseActionError struct {
	// Fixed machine readable code
	Code string `json:"code"`
	// Humanized error message
	Message string `json:"message"`
}

type PostNetworksIDActionsDeleteSubnetActionResponseActionResources struct {
	// ID of the Resource
	ID int64 `json:"id"`
	// Type of resource referenced
	Type string `json:"type"`
}

// PostNetworksIDActionsDeleteSubnetActionResponseActionStatusEnum - Status of the Action
type PostNetworksIDActionsDeleteSubnetActionResponseActionStatusEnum string

const (
	PostNetworksIDActionsDeleteSubnetActionResponseActionStatusEnumSuccess PostNetworksIDActionsDeleteSubnetActionResponseActionStatusEnum = "success"
	PostNetworksIDActionsDeleteSubnetActionResponseActionStatusEnumRunning PostNetworksIDActionsDeleteSubnetActionResponseActionStatusEnum = "running"
	PostNetworksIDActionsDeleteSubnetActionResponseActionStatusEnumError   PostNetworksIDActionsDeleteSubnetActionResponseActionStatusEnum = "error"
)

func (e PostNetworksIDActionsDeleteSubnetActionResponseActionStatusEnum) ToPointer() *PostNetworksIDActionsDeleteSubnetActionResponseActionStatusEnum {
	return &e
}

func (e *PostNetworksIDActionsDeleteSubnetActionResponseActionStatusEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "success":
		fallthrough
	case "running":
		fallthrough
	case "error":
		*e = PostNetworksIDActionsDeleteSubnetActionResponseActionStatusEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for PostNetworksIDActionsDeleteSubnetActionResponseActionStatusEnum: %v", v)
	}
}

type PostNetworksIDActionsDeleteSubnetActionResponseAction struct {
	// Command executed in the Action
	Command string `json:"command"`
	// Error message for the Action if error occurred, otherwise null
	Error PostNetworksIDActionsDeleteSubnetActionResponseActionError `json:"error"`
	// Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
	Finished string `json:"finished"`
	// ID of the Resource
	ID int64 `json:"id"`
	// Progress of Action in percent
	Progress float64 `json:"progress"`
	// Resources the Action relates to
	Resources []PostNetworksIDActionsDeleteSubnetActionResponseActionResources `json:"resources"`
	// Point in time when the Action was started (in ISO-8601 format)
	Started string `json:"started"`
	// Status of the Action
	Status PostNetworksIDActionsDeleteSubnetActionResponseActionStatusEnum `json:"status"`
}

// PostNetworksIDActionsDeleteSubnetActionResponse - The `action` key contains the `delete_subnet` Action
type PostNetworksIDActionsDeleteSubnetActionResponse struct {
	Action PostNetworksIDActionsDeleteSubnetActionResponseAction `json:"action"`
}

type PostNetworksIDActionsDeleteSubnetResponse struct {
	// The `action` key contains the `delete_subnet` Action
	ActionResponse *PostNetworksIDActionsDeleteSubnetActionResponse
	ContentType    string
	StatusCode     int
	RawResponse    *http.Response
}
