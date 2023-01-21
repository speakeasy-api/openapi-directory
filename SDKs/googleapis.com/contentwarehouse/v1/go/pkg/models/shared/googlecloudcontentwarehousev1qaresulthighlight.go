package shared

// GoogleCloudContentwarehouseV1QaResultHighlight
// A text span in the search text snippet that represents a highlighted section (answer context, highly relevant sentence, etc.).
type GoogleCloudContentwarehouseV1QaResultHighlight struct {
	EndIndex   *int32 `json:"endIndex,omitempty"`
	StartIndex *int32 `json:"startIndex,omitempty"`
}
