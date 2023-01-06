package operations

type GetAuthValidate200ApplicationJSON struct {
	Premium *int64 `json:"premium,omitempty"`
}

type GetAuthValidateResponse struct {
	ContentType                             string
	StatusCode                              int64
	GetAuthValidate200ApplicationJSONObject *GetAuthValidate200ApplicationJSON
}
