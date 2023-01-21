package shared

import (
	"time"
)

type CustomCheckTypeEnum string

const (
	CustomCheckTypeEnumCustom CustomCheckTypeEnum = "custom"
)

type CustomCheckLastRunStatusEnum string

const (
	CustomCheckLastRunStatusEnumFailed   CustomCheckLastRunStatusEnum = "failed"
	CustomCheckLastRunStatusEnumSuccess  CustomCheckLastRunStatusEnum = "success"
	CustomCheckLastRunStatusEnumCanceled CustomCheckLastRunStatusEnum = "canceled"
)

type CustomCheckLinks struct {
	Labels  *string `json:"labels,omitempty"`
	Members *string `json:"members,omitempty"`
	Owners  *string `json:"owners,omitempty"`
	Query   *string `json:"query,omitempty"`
	Self    *string `json:"self,omitempty"`
}

type CustomCheckInput struct {
	Description *string             `json:"description,omitempty"`
	Labels      []LabelInput        `json:"labels,omitempty"`
	Name        string              `json:"name"`
	OrgID       string              `json:"orgID"`
	Query       DashboardQuery      `json:"query"`
	Status      *TaskStatusTypeEnum `json:"status,omitempty"`
	TaskID      *string             `json:"taskID,omitempty"`
	Type        CustomCheckTypeEnum `json:"type"`
}

type CustomCheck struct {
	CreatedAt       *time.Time                    `json:"createdAt,omitempty"`
	Description     *string                       `json:"description,omitempty"`
	ID              *string                       `json:"id,omitempty"`
	Labels          []Label                       `json:"labels,omitempty"`
	LastRunError    *string                       `json:"lastRunError,omitempty"`
	LastRunStatus   *CustomCheckLastRunStatusEnum `json:"lastRunStatus,omitempty"`
	LatestCompleted *time.Time                    `json:"latestCompleted,omitempty"`
	Links           *CustomCheckLinks             `json:"links,omitempty"`
	Name            string                        `json:"name"`
	OrgID           string                        `json:"orgID"`
	OwnerID         *string                       `json:"ownerID,omitempty"`
	Query           DashboardQuery                `json:"query"`
	Status          *TaskStatusTypeEnum           `json:"status,omitempty"`
	TaskID          *string                       `json:"taskID,omitempty"`
	Type            CustomCheckTypeEnum           `json:"type"`
	UpdatedAt       *time.Time                    `json:"updatedAt,omitempty"`
}
