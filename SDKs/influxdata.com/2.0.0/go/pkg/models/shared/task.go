package shared

import (
	"time"
)

type TaskLastRunStatusEnum string

const (
	TaskLastRunStatusEnumFailed   TaskLastRunStatusEnum = "failed"
	TaskLastRunStatusEnumSuccess  TaskLastRunStatusEnum = "success"
	TaskLastRunStatusEnumCanceled TaskLastRunStatusEnum = "canceled"
)

type TaskLinks struct {
	Labels  *string `json:"labels,omitempty"`
	Logs    *string `json:"logs,omitempty"`
	Members *string `json:"members,omitempty"`
	Owners  *string `json:"owners,omitempty"`
	Runs    *string `json:"runs,omitempty"`
	Self    *string `json:"self,omitempty"`
}

type Task struct {
	AuthorizationID *string                `json:"authorizationID,omitempty"`
	CreatedAt       *time.Time             `json:"createdAt,omitempty"`
	Cron            *string                `json:"cron,omitempty"`
	Description     *string                `json:"description,omitempty"`
	Every           *string                `json:"every,omitempty"`
	Flux            string                 `json:"flux"`
	ID              string                 `json:"id"`
	Labels          []Label                `json:"labels,omitempty"`
	LastRunError    *string                `json:"lastRunError,omitempty"`
	LastRunStatus   *TaskLastRunStatusEnum `json:"lastRunStatus,omitempty"`
	LatestCompleted *time.Time             `json:"latestCompleted,omitempty"`
	Links           *TaskLinks             `json:"links,omitempty"`
	Name            string                 `json:"name"`
	Offset          *string                `json:"offset,omitempty"`
	Org             *string                `json:"org,omitempty"`
	OrgID           string                 `json:"orgID"`
	Status          *TaskStatusTypeEnum    `json:"status,omitempty"`
	Type            *string                `json:"type,omitempty"`
	UpdatedAt       *time.Time             `json:"updatedAt,omitempty"`
}
