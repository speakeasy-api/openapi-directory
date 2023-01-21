package operations

type CreateNotificationRuleRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type CreateNotificationRuleResponse struct {
	ContentType                   string
	Error                         *interface{}
	NotificationRuleDiscriminator *interface{}
	StatusCode                    int64
}
