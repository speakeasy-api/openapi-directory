// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

type DeleteUserPathParams struct {
	// Username of an user (unique)
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type DeleteUserRequest struct {
	PathParams DeleteUserPathParams
}

// DeleteUser200ApplicationJSONActionEnum - The id of the action
type DeleteUser200ApplicationJSONActionEnum string

const (
	DeleteUser200ApplicationJSONActionEnumDeleteUser DeleteUser200ApplicationJSONActionEnum = "deleteUser"
)

func (e *DeleteUser200ApplicationJSONActionEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "deleteUser":
		*e = DeleteUser200ApplicationJSONActionEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for DeleteUser200ApplicationJSONActionEnum: %s", s)
	}
}

type DeleteUser200ApplicationJSONDataDeletedUser struct {
	// Username of the deleted user
	Username string `json:"username"`
}

type DeleteUser200ApplicationJSONData struct {
	DeletedUser DeleteUser200ApplicationJSONDataDeletedUser `json:"deletedUser"`
}

// DeleteUser200ApplicationJSONResultEnum - Result of the request
type DeleteUser200ApplicationJSONResultEnum string

const (
	DeleteUser200ApplicationJSONResultEnumSuccess DeleteUser200ApplicationJSONResultEnum = "success"
	DeleteUser200ApplicationJSONResultEnumError   DeleteUser200ApplicationJSONResultEnum = "error"
)

func (e *DeleteUser200ApplicationJSONResultEnum) UnmarshalJSON(data []byte) error {
	var s string
	if err := json.Unmarshal(data, &s); err != nil {
		return err
	}
	switch s {
	case "success":
		fallthrough
	case "error":
		*e = DeleteUser200ApplicationJSONResultEnum(s)
		return nil
	default:
		return fmt.Errorf("invalid value for DeleteUser200ApplicationJSONResultEnum: %s", s)
	}
}

// DeleteUser200ApplicationJSON - Deleted user
type DeleteUser200ApplicationJSON struct {
	// The id of the action
	Action DeleteUser200ApplicationJSONActionEnum `json:"action"`
	Data   DeleteUser200ApplicationJSONData       `json:"data"`
	// Result of the request
	Result DeleteUser200ApplicationJSONResultEnum `json:"result"`
}

type DeleteUserResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Deleted user
	DeleteUser200ApplicationJSONObject *DeleteUser200ApplicationJSON
}
