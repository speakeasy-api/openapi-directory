// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// FloodlightActivitiesListResponse - Floodlight Activity List Response
type FloodlightActivitiesListResponse struct {
	// Floodlight activity collection.
	FloodlightActivities []FloodlightActivity `json:"floodlightActivities,omitempty"`
	// Identifies what kind of resource this is. Value: the fixed string "dfareporting#floodlightActivitiesListResponse".
	Kind *string `json:"kind,omitempty"`
	// Pagination token to be used for the next list operation.
	NextPageToken *string `json:"nextPageToken,omitempty"`
}
