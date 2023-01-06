package shared

import (
	"time"
)

type StringInSearchTypeEnum string

const (
	StringInSearchTypeEnumLocalProject StringInSearchTypeEnum = "LOCAL_PROJECT"
	StringInSearchTypeEnumImportedTm   StringInSearchTypeEnum = "IMPORTED_TM"
)

type StringInSearch struct {
	FileID            *int64                      `json:"file_id,omitempty"`
	InternalProjectID *int64                      `json:"internal_project_id,omitempty"`
	LastUpdated       *time.Time                  `json:"last_updated,omitempty"`
	ProjectID         *int64                      `json:"project_id,omitempty"`
	SearchScore       *float32                    `json:"search_score,omitempty"`
	Source            *string                     `json:"source,omitempty"`
	Status            *StringTranslationStateEnum `json:"status,omitempty"`
	StringID          *int64                      `json:"string_id,omitempty"`
	Target            *string                     `json:"target,omitempty"`
	Targets           []string                    `json:"targets,omitempty"`
	TmName            *string                     `json:"tm_name,omitempty"`
	Type              *StringInSearchTypeEnum     `json:"type,omitempty"`
}
