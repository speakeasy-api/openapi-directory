package operations

type PostSetpasswordRequestBody struct {
	Confpassword map[string]interface{} `json:"confpassword"`
	Password     map[string]interface{} `json:"password"`
	Token        string                 `json:"token"`
}

type PostSetpassword200ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostSetpassword400ApplicationJSON struct {
	Error *string `json:"error,omitempty"`
}

type PostSetpasswordRequest struct {
	Request PostSetpasswordRequestBody `request:"mediaType=application/json"`
}

type PostSetpasswordResponse struct {
	ContentType                             string
	StatusCode                              int64
	PostSetpassword200ApplicationJSONObject *PostSetpassword200ApplicationJSON
	PostSetpassword400ApplicationJSONObject *PostSetpassword400ApplicationJSON
}
