package shared

import (
	"time"
)

type Finding struct {
	Assignee       *Assignee                  `json:"assignee,omitempty"`
	Changed        *time.Time                 `json:"changed,omitempty"`
	ChangedBy      *ChangedBy                 `json:"changed_by,omitempty"`
	Comment        *string                    `json:"comment,omitempty"`
	CvssScore      *float32                   `json:"cvss_score,omitempty"`
	CvssVector     *string                    `json:"cvss_vector,omitempty"`
	Definition     *Definition                `json:"definition,omitempty"`
	Evidence       *string                    `json:"evidence,omitempty"`
	Extra          *string                    `json:"extra,omitempty"`
	Fix            *string                    `json:"fix,omitempty"`
	ID             *string                    `json:"id,omitempty"`
	InsertionPoint *FindingInsertionPointEnum `json:"insertion_point,omitempty"`
	Labels         []string                   `json:"labels,omitempty"`
	LastFound      *time.Time                 `json:"last_found,omitempty"`
	Method         *MethodEnum                `json:"method,omitempty"`
	Parameter      *string                    `json:"parameter,omitempty"`
	Params         *string                    `json:"params,omitempty"`
	Path           *string                    `json:"path,omitempty"`
	Reporter       *Reporter                  `json:"reporter,omitempty"`
	Requests       []Requests                 `json:"requests,omitempty"`
	Scans          []string                   `json:"scans,omitempty"`
	Severity       *FindingSeverityEnum       `json:"severity,omitempty"`
	State          *FindingStateEnum          `json:"state,omitempty"`
	Target         *TargetSimple              `json:"target,omitempty"`
	URL            *string                    `json:"url,omitempty"`
	Value          *string                    `json:"value,omitempty"`
}
