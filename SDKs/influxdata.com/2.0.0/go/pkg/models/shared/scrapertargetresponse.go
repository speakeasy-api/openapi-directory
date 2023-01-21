package shared

type ScraperTargetResponseLinks struct {
	Bucket       *string `json:"bucket,omitempty"`
	Members      *string `json:"members,omitempty"`
	Organization *string `json:"organization,omitempty"`
	Owners       *string `json:"owners,omitempty"`
	Self         *string `json:"self,omitempty"`
}

type ScraperTargetResponseTypeEnum string

const (
	ScraperTargetResponseTypeEnumPrometheus ScraperTargetResponseTypeEnum = "prometheus"
)

type ScraperTargetResponse struct {
	AllowInsecure *bool                          `json:"allowInsecure,omitempty"`
	Bucket        *string                        `json:"bucket,omitempty"`
	BucketID      *string                        `json:"bucketID,omitempty"`
	ID            *string                        `json:"id,omitempty"`
	Links         *ScraperTargetResponseLinks    `json:"links,omitempty"`
	Name          *string                        `json:"name,omitempty"`
	Org           *string                        `json:"org,omitempty"`
	OrgID         *string                        `json:"orgID,omitempty"`
	Type          *ScraperTargetResponseTypeEnum `json:"type,omitempty"`
	URL           *string                        `json:"url,omitempty"`
}
