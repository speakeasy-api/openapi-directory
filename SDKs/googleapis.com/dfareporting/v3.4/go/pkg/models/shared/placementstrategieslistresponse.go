// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// PlacementStrategiesListResponse - Placement Strategy List Response
type PlacementStrategiesListResponse struct {
	// Identifies what kind of resource this is. Value: the fixed string "dfareporting#placementStrategiesListResponse".
	Kind *string `json:"kind,omitempty"`
	// Pagination token to be used for the next list operation.
	NextPageToken *string `json:"nextPageToken,omitempty"`
	// Placement strategy collection.
	PlacementStrategies []PlacementStrategy `json:"placementStrategies,omitempty"`
}
