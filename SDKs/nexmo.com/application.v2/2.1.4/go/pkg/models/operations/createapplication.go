package operations

import (
	"openapi/pkg/models/shared"
)

type CreateApplication201ApplicationJSONKeys struct {
	PrivateKey *string `json:"private_key,omitempty"`
	PublicKey  *string `json:"public_key,omitempty"`
}

// CreateApplication201ApplicationJSONPrivacy
// Application privacy config
type CreateApplication201ApplicationJSONPrivacy struct {
	ImproveAi *bool `json:"improve_ai,omitempty"`
}

type CreateApplication201ApplicationJSON struct {
	Capabilities *shared.Capabilities                        `json:"capabilities,omitempty"`
	ID           *string                                     `json:"id,omitempty"`
	Keys         *CreateApplication201ApplicationJSONKeys    `json:"keys,omitempty"`
	Name         *string                                     `json:"name,omitempty"`
	Privacy      *CreateApplication201ApplicationJSONPrivacy `json:"privacy,omitempty"`
}

type CreateApplicationRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type CreateApplicationResponse struct {
	ContentType                               string
	StatusCode                                int64
	CreateApplication201ApplicationJSONObject *CreateApplication201ApplicationJSON
	CreateApplication400ApplicationJSONAny    *interface{}
	CreateApplication401ApplicationJSONAny    *interface{}
	CreateApplication405ApplicationJSONAny    *interface{}
	CreateApplication406ApplicationJSONAny    *interface{}
	CreateApplication415ApplicationJSONAny    *interface{}
}
