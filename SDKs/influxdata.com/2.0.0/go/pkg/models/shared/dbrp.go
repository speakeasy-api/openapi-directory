package shared

type DbrpInput struct {
	BucketID        *string `json:"bucketID,omitempty"`
	Database        *string `json:"database,omitempty"`
	Default         *bool   `json:"default,omitempty"`
	Org             *string `json:"org,omitempty"`
	OrgID           *string `json:"orgID,omitempty"`
	RetentionPolicy *string `json:"retention_policy,omitempty"`
}

type Dbrp struct {
	BucketID        *string `json:"bucketID,omitempty"`
	Database        *string `json:"database,omitempty"`
	Default         *bool   `json:"default,omitempty"`
	ID              *string `json:"id,omitempty"`
	Links           *Links  `json:"links,omitempty"`
	Org             *string `json:"org,omitempty"`
	OrgID           *string `json:"orgID,omitempty"`
	RetentionPolicy *string `json:"retention_policy,omitempty"`
}
