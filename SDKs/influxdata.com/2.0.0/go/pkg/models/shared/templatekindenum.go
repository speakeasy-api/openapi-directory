package shared

type TemplateKindEnum string

const (
	TemplateKindEnumBucket                        TemplateKindEnum = "Bucket"
	TemplateKindEnumCheck                         TemplateKindEnum = "Check"
	TemplateKindEnumCheckDeadman                  TemplateKindEnum = "CheckDeadman"
	TemplateKindEnumCheckThreshold                TemplateKindEnum = "CheckThreshold"
	TemplateKindEnumDashboard                     TemplateKindEnum = "Dashboard"
	TemplateKindEnumLabel                         TemplateKindEnum = "Label"
	TemplateKindEnumNotificationEndpoint          TemplateKindEnum = "NotificationEndpoint"
	TemplateKindEnumNotificationEndpointHTTP      TemplateKindEnum = "NotificationEndpointHTTP"
	TemplateKindEnumNotificationEndpointPagerDuty TemplateKindEnum = "NotificationEndpointPagerDuty"
	TemplateKindEnumNotificationEndpointSlack     TemplateKindEnum = "NotificationEndpointSlack"
	TemplateKindEnumNotificationRule              TemplateKindEnum = "NotificationRule"
	TemplateKindEnumTask                          TemplateKindEnum = "Task"
	TemplateKindEnumTelegraf                      TemplateKindEnum = "Telegraf"
	TemplateKindEnumVariable                      TemplateKindEnum = "Variable"
)
