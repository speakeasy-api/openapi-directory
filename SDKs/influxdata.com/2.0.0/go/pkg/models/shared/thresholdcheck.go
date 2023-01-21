package shared

import (
	"time"
)

type ThresholdCheckTags struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}

type ThresholdCheckTypeEnum string

const (
	ThresholdCheckTypeEnumThreshold ThresholdCheckTypeEnum = "threshold"
)

type ThresholdCheckLastRunStatusEnum string

const (
	ThresholdCheckLastRunStatusEnumFailed   ThresholdCheckLastRunStatusEnum = "failed"
	ThresholdCheckLastRunStatusEnumSuccess  ThresholdCheckLastRunStatusEnum = "success"
	ThresholdCheckLastRunStatusEnumCanceled ThresholdCheckLastRunStatusEnum = "canceled"
)

type ThresholdCheckLinks struct {
	Labels  *string `json:"labels,omitempty"`
	Members *string `json:"members,omitempty"`
	Owners  *string `json:"owners,omitempty"`
	Query   *string `json:"query,omitempty"`
	Self    *string `json:"self,omitempty"`
}

type ThresholdCheckInput struct {
	Description           *string                `json:"description,omitempty"`
	Every                 *string                `json:"every,omitempty"`
	Labels                []LabelInput           `json:"labels,omitempty"`
	Name                  string                 `json:"name"`
	Offset                *string                `json:"offset,omitempty"`
	OrgID                 string                 `json:"orgID"`
	Query                 DashboardQuery         `json:"query"`
	Status                *TaskStatusTypeEnum    `json:"status,omitempty"`
	StatusMessageTemplate *string                `json:"statusMessageTemplate,omitempty"`
	Tags                  []ThresholdCheckTags   `json:"tags,omitempty"`
	TaskID                *string                `json:"taskID,omitempty"`
	Thresholds            []interface{}          `json:"thresholds,omitempty"`
	Type                  ThresholdCheckTypeEnum `json:"type"`
}

type ThresholdCheck struct {
	CreatedAt             *time.Time                       `json:"createdAt,omitempty"`
	Description           *string                          `json:"description,omitempty"`
	Every                 *string                          `json:"every,omitempty"`
	ID                    *string                          `json:"id,omitempty"`
	Labels                []Label                          `json:"labels,omitempty"`
	LastRunError          *string                          `json:"lastRunError,omitempty"`
	LastRunStatus         *ThresholdCheckLastRunStatusEnum `json:"lastRunStatus,omitempty"`
	LatestCompleted       *time.Time                       `json:"latestCompleted,omitempty"`
	Links                 *ThresholdCheckLinks             `json:"links,omitempty"`
	Name                  string                           `json:"name"`
	Offset                *string                          `json:"offset,omitempty"`
	OrgID                 string                           `json:"orgID"`
	OwnerID               *string                          `json:"ownerID,omitempty"`
	Query                 DashboardQuery                   `json:"query"`
	Status                *TaskStatusTypeEnum              `json:"status,omitempty"`
	StatusMessageTemplate *string                          `json:"statusMessageTemplate,omitempty"`
	Tags                  []ThresholdCheckTags             `json:"tags,omitempty"`
	TaskID                *string                          `json:"taskID,omitempty"`
	Thresholds            []interface{}                    `json:"thresholds,omitempty"`
	Type                  ThresholdCheckTypeEnum           `json:"type"`
	UpdatedAt             *time.Time                       `json:"updatedAt,omitempty"`
}
