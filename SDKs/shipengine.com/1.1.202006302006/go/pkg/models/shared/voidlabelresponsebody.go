package shared

// VoidLabelResponseBody
// A void label response body
type VoidLabelResponseBody struct {
	Approved bool   `json:"approved"`
	Message  string `json:"message"`
}
