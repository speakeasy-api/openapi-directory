// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"encoding/json"
	"fmt"
)

// GoogleCloudConnectorsV1ConnectionStatusStateEnum - State.
type GoogleCloudConnectorsV1ConnectionStatusStateEnum string

const (
	GoogleCloudConnectorsV1ConnectionStatusStateEnumStateUnspecified      GoogleCloudConnectorsV1ConnectionStatusStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudConnectorsV1ConnectionStatusStateEnumCreating              GoogleCloudConnectorsV1ConnectionStatusStateEnum = "CREATING"
	GoogleCloudConnectorsV1ConnectionStatusStateEnumActive                GoogleCloudConnectorsV1ConnectionStatusStateEnum = "ACTIVE"
	GoogleCloudConnectorsV1ConnectionStatusStateEnumInactive              GoogleCloudConnectorsV1ConnectionStatusStateEnum = "INACTIVE"
	GoogleCloudConnectorsV1ConnectionStatusStateEnumDeleting              GoogleCloudConnectorsV1ConnectionStatusStateEnum = "DELETING"
	GoogleCloudConnectorsV1ConnectionStatusStateEnumUpdating              GoogleCloudConnectorsV1ConnectionStatusStateEnum = "UPDATING"
	GoogleCloudConnectorsV1ConnectionStatusStateEnumError                 GoogleCloudConnectorsV1ConnectionStatusStateEnum = "ERROR"
	GoogleCloudConnectorsV1ConnectionStatusStateEnumAuthorizationRequired GoogleCloudConnectorsV1ConnectionStatusStateEnum = "AUTHORIZATION_REQUIRED"
)

func (e GoogleCloudConnectorsV1ConnectionStatusStateEnum) ToPointer() *GoogleCloudConnectorsV1ConnectionStatusStateEnum {
	return &e
}

func (e *GoogleCloudConnectorsV1ConnectionStatusStateEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "STATE_UNSPECIFIED":
		fallthrough
	case "CREATING":
		fallthrough
	case "ACTIVE":
		fallthrough
	case "INACTIVE":
		fallthrough
	case "DELETING":
		fallthrough
	case "UPDATING":
		fallthrough
	case "ERROR":
		fallthrough
	case "AUTHORIZATION_REQUIRED":
		*e = GoogleCloudConnectorsV1ConnectionStatusStateEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GoogleCloudConnectorsV1ConnectionStatusStateEnum: %v", v)
	}
}

// GoogleCloudConnectorsV1ConnectionStatus - ConnectionStatus indicates the state of the connection.
type GoogleCloudConnectorsV1ConnectionStatus struct {
	// Description.
	Description *string `json:"description,omitempty"`
	// State.
	State *GoogleCloudConnectorsV1ConnectionStatusStateEnum `json:"state,omitempty"`
	// Status provides detailed information for the state.
	Status *string `json:"status,omitempty"`
}
