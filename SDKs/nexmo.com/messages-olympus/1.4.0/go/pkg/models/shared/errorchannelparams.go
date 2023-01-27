package shared

type ErrorChannelParamsInvalidParameters struct {
	Name   *string `json:"name,omitempty"`
	Reason *string `json:"reason,omitempty"`
}

// ErrorChannelParams
// Invalid channel parameters
type ErrorChannelParams struct {
	Detail            string                                `json:"detail"`
	Instance          string                                `json:"instance"`
	InvalidParameters []ErrorChannelParamsInvalidParameters `json:"invalid_parameters,omitempty"`
	Title             string                                `json:"title"`
	Type              string                                `json:"type"`
}
