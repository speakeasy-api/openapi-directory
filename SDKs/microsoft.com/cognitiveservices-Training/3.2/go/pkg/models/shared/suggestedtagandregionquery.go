package shared

// SuggestedTagAndRegionQuery
// The array of result images and token containing session and continuation Ids for the next query.
type SuggestedTagAndRegionQuery struct {
	Results []StoredSuggestedTagAndRegion    `json:"results,omitempty"`
	Token   *SuggestedTagAndRegionQueryToken `json:"token,omitempty"`
}
