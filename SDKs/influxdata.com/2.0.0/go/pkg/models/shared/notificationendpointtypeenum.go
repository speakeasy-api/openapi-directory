package shared

type NotificationEndpointTypeEnum string

const (
	NotificationEndpointTypeEnumSlack     NotificationEndpointTypeEnum = "slack"
	NotificationEndpointTypeEnumPagerduty NotificationEndpointTypeEnum = "pagerduty"
	NotificationEndpointTypeEnumHTTP      NotificationEndpointTypeEnum = "http"
	NotificationEndpointTypeEnumTelegram  NotificationEndpointTypeEnum = "telegram"
)
