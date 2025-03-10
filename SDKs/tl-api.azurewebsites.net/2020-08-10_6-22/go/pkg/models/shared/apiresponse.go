// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type APIResponse struct {
	IsError           *bool       `json:"isError,omitempty"`
	Message           *string     `json:"message,omitempty"`
	ResponseException interface{} `json:"responseException,omitempty"`
	Result            interface{} `json:"result,omitempty"`
	StatusCode        *int        `json:"statusCode,omitempty"`
	Version           *string     `json:"version,omitempty"`
}
