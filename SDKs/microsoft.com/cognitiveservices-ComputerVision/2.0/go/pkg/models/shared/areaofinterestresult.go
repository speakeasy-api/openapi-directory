package shared

// AreaOfInterestResult
// Result of AreaOfInterest operation.
type AreaOfInterestResult struct {
	AreaOfInterest *BoundingRect  `json:"areaOfInterest,omitempty"`
	Metadata       *ImageMetadata `json:"metadata,omitempty"`
	RequestID      *string        `json:"requestId,omitempty"`
}
