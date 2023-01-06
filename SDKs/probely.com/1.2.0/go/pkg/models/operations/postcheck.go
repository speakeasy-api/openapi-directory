package operations

type PostCheckRequestBody struct {
	Token string `json:"token"`
}

type PostCheck200ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostCheck400ApplicationJSON struct {
	Error *string `json:"error,omitempty"`
}

type PostCheckRequest struct {
	Request PostCheckRequestBody `request:"mediaType=application/json"`
}

type PostCheckResponse struct {
	ContentType                       string
	StatusCode                        int64
	PostCheck200ApplicationJSONObject *PostCheck200ApplicationJSON
	PostCheck400ApplicationJSONObject *PostCheck400ApplicationJSON
}
