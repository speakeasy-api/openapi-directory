package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateApplicationPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateApplication200ApplicationJSONKeys struct {
	PrivateKey *string `json:"private_key,omitempty"`
	PublicKey  *string `json:"public_key,omitempty"`
}

// UpdateApplication200ApplicationJSONPrivacy
// Application privacy config
type UpdateApplication200ApplicationJSONPrivacy struct {
	ImproveAi *bool `json:"improve_ai,omitempty"`
}

type UpdateApplication200ApplicationJSON struct {
	Capabilities *shared.Capabilities                        `json:"capabilities,omitempty"`
	ID           *string                                     `json:"id,omitempty"`
	Keys         *UpdateApplication200ApplicationJSONKeys    `json:"keys,omitempty"`
	Name         *string                                     `json:"name,omitempty"`
	Privacy      *UpdateApplication200ApplicationJSONPrivacy `json:"privacy,omitempty"`
}

type UpdateApplicationRequest struct {
	PathParams UpdateApplicationPathParams
	Request    interface{} `request:"mediaType=application/json"`
}

type UpdateApplicationResponse struct {
	ContentType                               string
	StatusCode                                int64
	UpdateApplication200ApplicationJSONObject *UpdateApplication200ApplicationJSON
	UpdateApplication400ApplicationJSONAny    *interface{}
	UpdateApplication401ApplicationJSONAny    *interface{}
	UpdateApplication404ApplicationJSONAny    *interface{}
	UpdateApplication405ApplicationJSONAny    *interface{}
	UpdateApplication406ApplicationJSONAny    *interface{}
	UpdateApplication415ApplicationJSONAny    *interface{}
}
