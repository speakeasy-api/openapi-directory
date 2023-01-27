package shared

type ErrorMessageParamsInvalidParameters struct {
	Name   *string `json:"name,omitempty"`
	Reason *string `json:"reason,omitempty"`
}

// ErrorMessageParams
// Invalid message parameters
type ErrorMessageParams struct {
	Detail            string                                `json:"detail"`
	Instance          string                                `json:"instance"`
	InvalidParameters []ErrorMessageParamsInvalidParameters `json:"invalid_parameters,omitempty"`
	Title             string                                `json:"title"`
	Type              string                                `json:"type"`
}
