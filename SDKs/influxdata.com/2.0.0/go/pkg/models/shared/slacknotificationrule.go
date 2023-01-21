package shared

import (
	"time"
)

type SlackNotificationRuleTypeEnum string

const (
	SlackNotificationRuleTypeEnumSlack SlackNotificationRuleTypeEnum = "slack"
)

type SlackNotificationRuleLastRunStatusEnum string

const (
	SlackNotificationRuleLastRunStatusEnumFailed   SlackNotificationRuleLastRunStatusEnum = "failed"
	SlackNotificationRuleLastRunStatusEnumSuccess  SlackNotificationRuleLastRunStatusEnum = "success"
	SlackNotificationRuleLastRunStatusEnumCanceled SlackNotificationRuleLastRunStatusEnum = "canceled"
)

type SlackNotificationRuleLinks struct {
	Labels  *string `json:"labels,omitempty"`
	Members *string `json:"members,omitempty"`
	Owners  *string `json:"owners,omitempty"`
	Query   *string `json:"query,omitempty"`
	Self    *string `json:"self,omitempty"`
}

type SlackNotificationRuleInput struct {
	Channel         *string                       `json:"channel,omitempty"`
	Description     *string                       `json:"description,omitempty"`
	EndpointID      string                        `json:"endpointID"`
	Every           *string                       `json:"every,omitempty"`
	Labels          []LabelInput                  `json:"labels,omitempty"`
	Limit           *int64                        `json:"limit,omitempty"`
	LimitEvery      *int64                        `json:"limitEvery,omitempty"`
	MessageTemplate string                        `json:"messageTemplate"`
	Name            string                        `json:"name"`
	Offset          *string                       `json:"offset,omitempty"`
	OrgID           string                        `json:"orgID"`
	RunbookLink     *string                       `json:"runbookLink,omitempty"`
	SleepUntil      *string                       `json:"sleepUntil,omitempty"`
	Status          TaskStatusTypeEnum            `json:"status"`
	StatusRules     []StatusRule                  `json:"statusRules"`
	TagRules        []TagRule                     `json:"tagRules,omitempty"`
	TaskID          *string                       `json:"taskID,omitempty"`
	Type            SlackNotificationRuleTypeEnum `json:"type"`
}

type SlackNotificationRule struct {
	Channel         *string                                 `json:"channel,omitempty"`
	CreatedAt       *time.Time                              `json:"createdAt,omitempty"`
	Description     *string                                 `json:"description,omitempty"`
	EndpointID      string                                  `json:"endpointID"`
	Every           *string                                 `json:"every,omitempty"`
	ID              *string                                 `json:"id,omitempty"`
	Labels          []Label                                 `json:"labels,omitempty"`
	LastRunError    *string                                 `json:"lastRunError,omitempty"`
	LastRunStatus   *SlackNotificationRuleLastRunStatusEnum `json:"lastRunStatus,omitempty"`
	LatestCompleted *time.Time                              `json:"latestCompleted,omitempty"`
	Limit           *int64                                  `json:"limit,omitempty"`
	LimitEvery      *int64                                  `json:"limitEvery,omitempty"`
	Links           *SlackNotificationRuleLinks             `json:"links,omitempty"`
	MessageTemplate string                                  `json:"messageTemplate"`
	Name            string                                  `json:"name"`
	Offset          *string                                 `json:"offset,omitempty"`
	OrgID           string                                  `json:"orgID"`
	OwnerID         *string                                 `json:"ownerID,omitempty"`
	RunbookLink     *string                                 `json:"runbookLink,omitempty"`
	SleepUntil      *string                                 `json:"sleepUntil,omitempty"`
	Status          TaskStatusTypeEnum                      `json:"status"`
	StatusRules     []StatusRule                            `json:"statusRules"`
	TagRules        []TagRule                               `json:"tagRules,omitempty"`
	TaskID          *string                                 `json:"taskID,omitempty"`
	Type            SlackNotificationRuleTypeEnum           `json:"type"`
	UpdatedAt       *time.Time                              `json:"updatedAt,omitempty"`
}
