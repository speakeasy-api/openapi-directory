package shared

// GoogleCloudContentwarehouseV1InvalidRule
// A triggered rule that failed the validation check(s) after parsing.
type GoogleCloudContentwarehouseV1InvalidRule struct {
	Error *string                            `json:"error,omitempty"`
	Rule  *GoogleCloudContentwarehouseV1Rule `json:"rule,omitempty"`
}
