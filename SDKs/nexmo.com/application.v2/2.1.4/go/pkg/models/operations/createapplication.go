package operations

type CreateApplication201ApplicationJSONKeys struct {
	PrivateKey *string `json:"private_key,omitempty"`
	PublicKey  *string `json:"public_key,omitempty"`
}

type CreateApplication201ApplicationJSON struct {
	Keys *CreateApplication201ApplicationJSONKeys `json:"keys,omitempty"`
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
