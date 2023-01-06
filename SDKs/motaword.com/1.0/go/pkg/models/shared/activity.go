package shared

type ActivityTypeEnum string

const (
	ActivityTypeEnumTranslated ActivityTypeEnum = "translated"
	ActivityTypeEnumProofread  ActivityTypeEnum = "proofread"
)

type Activity struct {
	ActivityAt *int64            `json:"activity_at,omitempty"`
	ID         *int64            `json:"id,omitempty"`
	Links      *ActivityLinks    `json:"links,omitempty"`
	SourceText *string           `json:"source_text,omitempty"`
	TargetText *string           `json:"target_text,omitempty"`
	Translator *int64            `json:"translator,omitempty"`
	Type       *ActivityTypeEnum `json:"type,omitempty"`
}
