// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ListBusinessCallsInsightsResponse - Response message for ListBusinessCallsInsights.
type ListBusinessCallsInsightsResponse struct {
	// A collection of business calls insights for the location.
	BusinessCallsInsights []BusinessCallsInsights `json:"businessCallsInsights,omitempty"`
	// A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages. Some of the metric_types (e.g, AGGREGATE_COUNT) returns a single page. For these metrics, the next_page_token will be empty.
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
