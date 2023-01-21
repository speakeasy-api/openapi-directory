package shared

import (
	"time"
)

type HTTPNotificationRuleTypeEnum string

const (
	HTTPNotificationRuleTypeEnumHTTP HTTPNotificationRuleTypeEnum = "http"
)

type HTTPNotificationRuleLastRunStatusEnum string

const (
	HTTPNotificationRuleLastRunStatusEnumFailed   HTTPNotificationRuleLastRunStatusEnum = "failed"
	HTTPNotificationRuleLastRunStatusEnumSuccess  HTTPNotificationRuleLastRunStatusEnum = "success"
	HTTPNotificationRuleLastRunStatusEnumCanceled HTTPNotificationRuleLastRunStatusEnum = "canceled"
)

type HTTPNotificationRuleLinks struct {
	Labels  *string `json:"labels,omitempty"`
	Members *string `json:"members,omitempty"`
	Owners  *string `json:"owners,omitempty"`
	Query   *string `json:"query,omitempty"`
	Self    *string `json:"self,omitempty"`
}

type HTTPNotificationRuleInput struct {
	Description *string                      `json:"description,omitempty"`
	EndpointID  string                       `json:"endpointID"`
	Every       *string                      `json:"every,omitempty"`
	Labels      []LabelInput                 `json:"labels,omitempty"`
	Limit       *int64                       `json:"limit,omitempty"`
	LimitEvery  *int64                       `json:"limitEvery,omitempty"`
	Name        string                       `json:"name"`
	Offset      *string                      `json:"offset,omitempty"`
	OrgID       string                       `json:"orgID"`
	RunbookLink *string                      `json:"runbookLink,omitempty"`
	SleepUntil  *string                      `json:"sleepUntil,omitempty"`
	Status      TaskStatusTypeEnum           `json:"status"`
	StatusRules []StatusRule                 `json:"statusRules"`
	TagRules    []TagRule                    `json:"tagRules,omitempty"`
	TaskID      *string                      `json:"taskID,omitempty"`
	Type        HTTPNotificationRuleTypeEnum `json:"type"`
	URL         *string                      `json:"url,omitempty"`
}

type HTTPNotificationRule struct {
	CreatedAt       *time.Time                             `json:"createdAt,omitempty"`
	Description     *string                                `json:"description,omitempty"`
	EndpointID      string                                 `json:"endpointID"`
	Every           *string                                `json:"every,omitempty"`
	ID              *string                                `json:"id,omitempty"`
	Labels          []Label                                `json:"labels,omitempty"`
	LastRunError    *string                                `json:"lastRunError,omitempty"`
	LastRunStatus   *HTTPNotificationRuleLastRunStatusEnum `json:"lastRunStatus,omitempty"`
	LatestCompleted *time.Time                             `json:"latestCompleted,omitempty"`
	Limit           *int64                                 `json:"limit,omitempty"`
	LimitEvery      *int64                                 `json:"limitEvery,omitempty"`
	Links           *HTTPNotificationRuleLinks             `json:"links,omitempty"`
	Name            string                                 `json:"name"`
	Offset          *string                                `json:"offset,omitempty"`
	OrgID           string                                 `json:"orgID"`
	OwnerID         *string                                `json:"ownerID,omitempty"`
	RunbookLink     *string                                `json:"runbookLink,omitempty"`
	SleepUntil      *string                                `json:"sleepUntil,omitempty"`
	Status          TaskStatusTypeEnum                     `json:"status"`
	StatusRules     []StatusRule                           `json:"statusRules"`
	TagRules        []TagRule                              `json:"tagRules,omitempty"`
	TaskID          *string                                `json:"taskID,omitempty"`
	Type            HTTPNotificationRuleTypeEnum           `json:"type"`
	UpdatedAt       *time.Time                             `json:"updatedAt,omitempty"`
	URL             *string                                `json:"url,omitempty"`
}
