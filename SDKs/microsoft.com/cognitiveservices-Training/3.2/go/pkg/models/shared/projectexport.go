package shared

// ProjectExport
// Represents information about a project export.
type ProjectExport struct {
	EstimatedImportTimeInMS *int32  `json:"estimatedImportTimeInMS,omitempty"`
	ImageCount              *int32  `json:"imageCount,omitempty"`
	IterationCount          *int32  `json:"iterationCount,omitempty"`
	RegionCount             *int32  `json:"regionCount,omitempty"`
	TagCount                *int32  `json:"tagCount,omitempty"`
	Token                   *string `json:"token,omitempty"`
}
