package shared

import (
	"time"
)

type DeadmanCheckTags struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}

type DeadmanCheckTypeEnum string

const (
	DeadmanCheckTypeEnumDeadman DeadmanCheckTypeEnum = "deadman"
)

type DeadmanCheckLastRunStatusEnum string

const (
	DeadmanCheckLastRunStatusEnumFailed   DeadmanCheckLastRunStatusEnum = "failed"
	DeadmanCheckLastRunStatusEnumSuccess  DeadmanCheckLastRunStatusEnum = "success"
	DeadmanCheckLastRunStatusEnumCanceled DeadmanCheckLastRunStatusEnum = "canceled"
)

type DeadmanCheckLinks struct {
	Labels  *string `json:"labels,omitempty"`
	Members *string `json:"members,omitempty"`
	Owners  *string `json:"owners,omitempty"`
	Query   *string `json:"query,omitempty"`
	Self    *string `json:"self,omitempty"`
}

type DeadmanCheckInput struct {
	Description           *string               `json:"description,omitempty"`
	Every                 *string               `json:"every,omitempty"`
	Labels                []LabelInput          `json:"labels,omitempty"`
	Level                 *CheckStatusLevelEnum `json:"level,omitempty"`
	Name                  string                `json:"name"`
	Offset                *string               `json:"offset,omitempty"`
	OrgID                 string                `json:"orgID"`
	Query                 DashboardQuery        `json:"query"`
	ReportZero            *bool                 `json:"reportZero,omitempty"`
	StaleTime             *string               `json:"staleTime,omitempty"`
	Status                *TaskStatusTypeEnum   `json:"status,omitempty"`
	StatusMessageTemplate *string               `json:"statusMessageTemplate,omitempty"`
	Tags                  []DeadmanCheckTags    `json:"tags,omitempty"`
	TaskID                *string               `json:"taskID,omitempty"`
	TimeSince             *string               `json:"timeSince,omitempty"`
	Type                  DeadmanCheckTypeEnum  `json:"type"`
}

type DeadmanCheck struct {
	CreatedAt             *time.Time                     `json:"createdAt,omitempty"`
	Description           *string                        `json:"description,omitempty"`
	Every                 *string                        `json:"every,omitempty"`
	ID                    *string                        `json:"id,omitempty"`
	Labels                []Label                        `json:"labels,omitempty"`
	LastRunError          *string                        `json:"lastRunError,omitempty"`
	LastRunStatus         *DeadmanCheckLastRunStatusEnum `json:"lastRunStatus,omitempty"`
	LatestCompleted       *time.Time                     `json:"latestCompleted,omitempty"`
	Level                 *CheckStatusLevelEnum          `json:"level,omitempty"`
	Links                 *DeadmanCheckLinks             `json:"links,omitempty"`
	Name                  string                         `json:"name"`
	Offset                *string                        `json:"offset,omitempty"`
	OrgID                 string                         `json:"orgID"`
	OwnerID               *string                        `json:"ownerID,omitempty"`
	Query                 DashboardQuery                 `json:"query"`
	ReportZero            *bool                          `json:"reportZero,omitempty"`
	StaleTime             *string                        `json:"staleTime,omitempty"`
	Status                *TaskStatusTypeEnum            `json:"status,omitempty"`
	StatusMessageTemplate *string                        `json:"statusMessageTemplate,omitempty"`
	Tags                  []DeadmanCheckTags             `json:"tags,omitempty"`
	TaskID                *string                        `json:"taskID,omitempty"`
	TimeSince             *string                        `json:"timeSince,omitempty"`
	Type                  DeadmanCheckTypeEnum           `json:"type"`
	UpdatedAt             *time.Time                     `json:"updatedAt,omitempty"`
}
