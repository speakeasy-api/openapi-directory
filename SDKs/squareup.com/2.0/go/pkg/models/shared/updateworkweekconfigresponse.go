package shared

// UpdateWorkweekConfigResponse
// The response to a request to update a `WorkweekConfig` object. The response contains
// the updated `WorkweekConfig` object and might contain a set of `Error` objects if
// the request resulted in errors.
type UpdateWorkweekConfigResponse struct {
	Errors         []Error         `json:"errors,omitempty"`
	WorkweekConfig *WorkweekConfig `json:"workweek_config,omitempty"`
}
