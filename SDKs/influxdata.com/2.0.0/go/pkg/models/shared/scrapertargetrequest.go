package shared

type ScraperTargetRequestTypeEnum string

const (
	ScraperTargetRequestTypeEnumPrometheus ScraperTargetRequestTypeEnum = "prometheus"
)

type ScraperTargetRequest struct {
	AllowInsecure *bool                         `json:"allowInsecure,omitempty"`
	BucketID      *string                       `json:"bucketID,omitempty"`
	Name          *string                       `json:"name,omitempty"`
	OrgID         *string                       `json:"orgID,omitempty"`
	Type          *ScraperTargetRequestTypeEnum `json:"type,omitempty"`
	URL           *string                       `json:"url,omitempty"`
}
