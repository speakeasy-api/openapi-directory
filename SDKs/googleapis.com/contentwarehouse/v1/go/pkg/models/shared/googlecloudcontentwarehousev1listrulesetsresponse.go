package shared

// GoogleCloudContentwarehouseV1ListRuleSetsResponse
// Response message for RuleSetService.ListRuleSets.
type GoogleCloudContentwarehouseV1ListRuleSetsResponse struct {
	NextPageToken *string                                `json:"nextPageToken,omitempty"`
	RuleSets      []GoogleCloudContentwarehouseV1RuleSet `json:"ruleSets,omitempty"`
}
