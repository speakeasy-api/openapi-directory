// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest - Request message for SmartDeviceManagementService.ExecuteDeviceCommand
type GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest struct {
	// The command name to execute, represented by the fully qualified protobuf message name.
	Command *string `json:"command,omitempty"`
	// The command message to execute, represented as a Struct.
	Params map[string]interface{} `json:"params,omitempty"`
}
