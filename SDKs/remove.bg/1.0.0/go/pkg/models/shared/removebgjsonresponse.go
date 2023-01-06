package shared

type RemoveBgJSONResponseData struct {
	ResultB64 *string `json:"result_b64,omitempty"`
}

type RemoveBgJSONResponse struct {
	Data *RemoveBgJSONResponseData `json:"data,omitempty"`
}
