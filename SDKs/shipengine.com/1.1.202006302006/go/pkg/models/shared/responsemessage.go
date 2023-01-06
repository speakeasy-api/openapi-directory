package shared

// ResponseMessage
// A response message that displays when additional info is needed for an address validation request.
type ResponseMessage struct {
	Code       map[string]interface{} `json:"code,omitempty"`
	DetailCode map[string]interface{} `json:"detail_code,omitempty"`
	Message    *string                `json:"message,omitempty"`
	Type       map[string]interface{} `json:"type,omitempty"`
}
