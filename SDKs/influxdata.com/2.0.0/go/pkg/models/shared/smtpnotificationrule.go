package shared

import (
	"time"
)

type SMTPNotificationRuleTypeEnum string

const (
	SMTPNotificationRuleTypeEnumSMTP SMTPNotificationRuleTypeEnum = "smtp"
)

type SMTPNotificationRuleLastRunStatusEnum string

const (
	SMTPNotificationRuleLastRunStatusEnumFailed   SMTPNotificationRuleLastRunStatusEnum = "failed"
	SMTPNotificationRuleLastRunStatusEnumSuccess  SMTPNotificationRuleLastRunStatusEnum = "success"
	SMTPNotificationRuleLastRunStatusEnumCanceled SMTPNotificationRuleLastRunStatusEnum = "canceled"
)

type SMTPNotificationRuleLinks struct {
	Labels  *string `json:"labels,omitempty"`
	Members *string `json:"members,omitempty"`
	Owners  *string `json:"owners,omitempty"`
	Query   *string `json:"query,omitempty"`
	Self    *string `json:"self,omitempty"`
}

type SMTPNotificationRuleInput struct {
	BodyTemplate    *string                      `json:"bodyTemplate,omitempty"`
	Description     *string                      `json:"description,omitempty"`
	EndpointID      string                       `json:"endpointID"`
	Every           *string                      `json:"every,omitempty"`
	Labels          []LabelInput                 `json:"labels,omitempty"`
	Limit           *int64                       `json:"limit,omitempty"`
	LimitEvery      *int64                       `json:"limitEvery,omitempty"`
	Name            string                       `json:"name"`
	Offset          *string                      `json:"offset,omitempty"`
	OrgID           string                       `json:"orgID"`
	RunbookLink     *string                      `json:"runbookLink,omitempty"`
	SleepUntil      *string                      `json:"sleepUntil,omitempty"`
	Status          TaskStatusTypeEnum           `json:"status"`
	StatusRules     []StatusRule                 `json:"statusRules"`
	SubjectTemplate string                       `json:"subjectTemplate"`
	TagRules        []TagRule                    `json:"tagRules,omitempty"`
	TaskID          *string                      `json:"taskID,omitempty"`
	To              string                       `json:"to"`
	Type            SMTPNotificationRuleTypeEnum `json:"type"`
}

type SMTPNotificationRule struct {
	BodyTemplate    *string                                `json:"bodyTemplate,omitempty"`
	CreatedAt       *time.Time                             `json:"createdAt,omitempty"`
	Description     *string                                `json:"description,omitempty"`
	EndpointID      string                                 `json:"endpointID"`
	Every           *string                                `json:"every,omitempty"`
	ID              *string                                `json:"id,omitempty"`
	Labels          []Label                                `json:"labels,omitempty"`
	LastRunError    *string                                `json:"lastRunError,omitempty"`
	LastRunStatus   *SMTPNotificationRuleLastRunStatusEnum `json:"lastRunStatus,omitempty"`
	LatestCompleted *time.Time                             `json:"latestCompleted,omitempty"`
	Limit           *int64                                 `json:"limit,omitempty"`
	LimitEvery      *int64                                 `json:"limitEvery,omitempty"`
	Links           *SMTPNotificationRuleLinks             `json:"links,omitempty"`
	Name            string                                 `json:"name"`
	Offset          *string                                `json:"offset,omitempty"`
	OrgID           string                                 `json:"orgID"`
	OwnerID         *string                                `json:"ownerID,omitempty"`
	RunbookLink     *string                                `json:"runbookLink,omitempty"`
	SleepUntil      *string                                `json:"sleepUntil,omitempty"`
	Status          TaskStatusTypeEnum                     `json:"status"`
	StatusRules     []StatusRule                           `json:"statusRules"`
	SubjectTemplate string                                 `json:"subjectTemplate"`
	TagRules        []TagRule                              `json:"tagRules,omitempty"`
	TaskID          *string                                `json:"taskID,omitempty"`
	To              string                                 `json:"to"`
	Type            SMTPNotificationRuleTypeEnum           `json:"type"`
	UpdatedAt       *time.Time                             `json:"updatedAt,omitempty"`
}
