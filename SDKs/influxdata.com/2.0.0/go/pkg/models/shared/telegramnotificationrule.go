package shared

import (
	"time"
)

type TelegramNotificationRuleParseModeEnum string

const (
	TelegramNotificationRuleParseModeEnumMarkdownV2 TelegramNotificationRuleParseModeEnum = "MarkdownV2"
	TelegramNotificationRuleParseModeEnumHTML       TelegramNotificationRuleParseModeEnum = "HTML"
	TelegramNotificationRuleParseModeEnumMarkdown   TelegramNotificationRuleParseModeEnum = "Markdown"
)

type TelegramNotificationRuleTypeEnum string

const (
	TelegramNotificationRuleTypeEnumTelegram TelegramNotificationRuleTypeEnum = "telegram"
)

type TelegramNotificationRuleLastRunStatusEnum string

const (
	TelegramNotificationRuleLastRunStatusEnumFailed   TelegramNotificationRuleLastRunStatusEnum = "failed"
	TelegramNotificationRuleLastRunStatusEnumSuccess  TelegramNotificationRuleLastRunStatusEnum = "success"
	TelegramNotificationRuleLastRunStatusEnumCanceled TelegramNotificationRuleLastRunStatusEnum = "canceled"
)

type TelegramNotificationRuleLinks struct {
	Labels  *string `json:"labels,omitempty"`
	Members *string `json:"members,omitempty"`
	Owners  *string `json:"owners,omitempty"`
	Query   *string `json:"query,omitempty"`
	Self    *string `json:"self,omitempty"`
}

type TelegramNotificationRuleInput struct {
	Description           *string                                `json:"description,omitempty"`
	DisableWebPagePreview *bool                                  `json:"disableWebPagePreview,omitempty"`
	EndpointID            string                                 `json:"endpointID"`
	Every                 *string                                `json:"every,omitempty"`
	Labels                []LabelInput                           `json:"labels,omitempty"`
	Limit                 *int64                                 `json:"limit,omitempty"`
	LimitEvery            *int64                                 `json:"limitEvery,omitempty"`
	MessageTemplate       string                                 `json:"messageTemplate"`
	Name                  string                                 `json:"name"`
	Offset                *string                                `json:"offset,omitempty"`
	OrgID                 string                                 `json:"orgID"`
	ParseMode             *TelegramNotificationRuleParseModeEnum `json:"parseMode,omitempty"`
	RunbookLink           *string                                `json:"runbookLink,omitempty"`
	SleepUntil            *string                                `json:"sleepUntil,omitempty"`
	Status                TaskStatusTypeEnum                     `json:"status"`
	StatusRules           []StatusRule                           `json:"statusRules"`
	TagRules              []TagRule                              `json:"tagRules,omitempty"`
	TaskID                *string                                `json:"taskID,omitempty"`
	Type                  TelegramNotificationRuleTypeEnum       `json:"type"`
}

type TelegramNotificationRule struct {
	CreatedAt             *time.Time                                 `json:"createdAt,omitempty"`
	Description           *string                                    `json:"description,omitempty"`
	DisableWebPagePreview *bool                                      `json:"disableWebPagePreview,omitempty"`
	EndpointID            string                                     `json:"endpointID"`
	Every                 *string                                    `json:"every,omitempty"`
	ID                    *string                                    `json:"id,omitempty"`
	Labels                []Label                                    `json:"labels,omitempty"`
	LastRunError          *string                                    `json:"lastRunError,omitempty"`
	LastRunStatus         *TelegramNotificationRuleLastRunStatusEnum `json:"lastRunStatus,omitempty"`
	LatestCompleted       *time.Time                                 `json:"latestCompleted,omitempty"`
	Limit                 *int64                                     `json:"limit,omitempty"`
	LimitEvery            *int64                                     `json:"limitEvery,omitempty"`
	Links                 *TelegramNotificationRuleLinks             `json:"links,omitempty"`
	MessageTemplate       string                                     `json:"messageTemplate"`
	Name                  string                                     `json:"name"`
	Offset                *string                                    `json:"offset,omitempty"`
	OrgID                 string                                     `json:"orgID"`
	OwnerID               *string                                    `json:"ownerID,omitempty"`
	ParseMode             *TelegramNotificationRuleParseModeEnum     `json:"parseMode,omitempty"`
	RunbookLink           *string                                    `json:"runbookLink,omitempty"`
	SleepUntil            *string                                    `json:"sleepUntil,omitempty"`
	Status                TaskStatusTypeEnum                         `json:"status"`
	StatusRules           []StatusRule                               `json:"statusRules"`
	TagRules              []TagRule                                  `json:"tagRules,omitempty"`
	TaskID                *string                                    `json:"taskID,omitempty"`
	Type                  TelegramNotificationRuleTypeEnum           `json:"type"`
	UpdatedAt             *time.Time                                 `json:"updatedAt,omitempty"`
}
