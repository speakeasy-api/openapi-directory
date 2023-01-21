package shared

// ListWorkweekConfigsResponse
// The response to a request for a set of `WorkweekConfig` objects. The response contains
// the requested `WorkweekConfig` objects and might contain a set of `Error` objects if
// the request resulted in errors.
type ListWorkweekConfigsResponse struct {
	Cursor          *string          `json:"cursor,omitempty"`
	Errors          []Error          `json:"errors,omitempty"`
	WorkweekConfigs []WorkweekConfig `json:"workweek_configs,omitempty"`
}
