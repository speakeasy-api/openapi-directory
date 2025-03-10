// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ListEndpointsResponse - The response message for RegistrationService.ListEndpoints.
type ListEndpointsResponse struct {
	// The list of endpoints.
	Endpoints []Endpoint `json:"endpoints,omitempty"`
	// Token to retrieve the next page of results, or empty if there are no more results in the list.
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
