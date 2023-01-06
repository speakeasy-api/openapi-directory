package operations

type PostResetRequestBody struct {
	Email string `json:"email"`
}

type PostReset200ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostReset400ApplicationJSON struct {
	Error *string `json:"error,omitempty"`
}

type PostResetRequest struct {
	Request PostResetRequestBody `request:"mediaType=application/json"`
}

type PostResetResponse struct {
	ContentType                       string
	StatusCode                        int64
	PostReset200ApplicationJSONObject *PostReset200ApplicationJSON
	PostReset400ApplicationJSONObject *PostReset400ApplicationJSON
}
