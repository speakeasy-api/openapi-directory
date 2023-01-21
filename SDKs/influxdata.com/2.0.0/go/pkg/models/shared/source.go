package shared

type SourceLanguagesEnum string

const (
	SourceLanguagesEnumFlux     SourceLanguagesEnum = "flux"
	SourceLanguagesEnumInfluxql SourceLanguagesEnum = "influxql"
)

type SourceLinks struct {
	Buckets *string `json:"buckets,omitempty"`
	Health  *string `json:"health,omitempty"`
	Query   *string `json:"query,omitempty"`
	Self    *string `json:"self,omitempty"`
}

type SourceTypeEnum string

const (
	SourceTypeEnumV1   SourceTypeEnum = "v1"
	SourceTypeEnumV2   SourceTypeEnum = "v2"
	SourceTypeEnumSelf SourceTypeEnum = "self"
)

type Source struct {
	Default            *bool                 `json:"default,omitempty"`
	DefaultRP          *string               `json:"defaultRP,omitempty"`
	ID                 *string               `json:"id,omitempty"`
	InsecureSkipVerify *bool                 `json:"insecureSkipVerify,omitempty"`
	Languages          []SourceLanguagesEnum `json:"languages,omitempty"`
	Links              *SourceLinks          `json:"links,omitempty"`
	MetaURL            *string               `json:"metaUrl,omitempty"`
	Name               *string               `json:"name,omitempty"`
	OrgID              *string               `json:"orgID,omitempty"`
	Password           *string               `json:"password,omitempty"`
	SharedSecret       *string               `json:"sharedSecret,omitempty"`
	Telegraf           *string               `json:"telegraf,omitempty"`
	Token              *string               `json:"token,omitempty"`
	Type               *SourceTypeEnum       `json:"type,omitempty"`
	URL                *string               `json:"url,omitempty"`
	Username           *string               `json:"username,omitempty"`
}

type SourceInput struct {
	Default            *bool           `json:"default,omitempty"`
	DefaultRP          *string         `json:"defaultRP,omitempty"`
	ID                 *string         `json:"id,omitempty"`
	InsecureSkipVerify *bool           `json:"insecureSkipVerify,omitempty"`
	Links              *SourceLinks    `json:"links,omitempty"`
	MetaURL            *string         `json:"metaUrl,omitempty"`
	Name               *string         `json:"name,omitempty"`
	OrgID              *string         `json:"orgID,omitempty"`
	Password           *string         `json:"password,omitempty"`
	SharedSecret       *string         `json:"sharedSecret,omitempty"`
	Telegraf           *string         `json:"telegraf,omitempty"`
	Token              *string         `json:"token,omitempty"`
	Type               *SourceTypeEnum `json:"type,omitempty"`
	URL                *string         `json:"url,omitempty"`
	Username           *string         `json:"username,omitempty"`
}
