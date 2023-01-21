package shared

type TelegrafLinks struct {
	Labels  *string `json:"labels,omitempty"`
	Members *string `json:"members,omitempty"`
	Owners  *string `json:"owners,omitempty"`
	Self    *string `json:"self,omitempty"`
}

type TelegrafMetadata struct {
	Buckets []string `json:"buckets,omitempty"`
}

type Telegraf struct {
	Config      *string           `json:"config,omitempty"`
	Description *string           `json:"description,omitempty"`
	ID          *string           `json:"id,omitempty"`
	Labels      []Label           `json:"labels,omitempty"`
	Links       *TelegrafLinks    `json:"links,omitempty"`
	Metadata    *TelegrafMetadata `json:"metadata,omitempty"`
	Name        *string           `json:"name,omitempty"`
	OrgID       *string           `json:"orgID,omitempty"`
}
