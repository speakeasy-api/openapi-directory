package operations

type CreateNotificationEndpointRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type CreateNotificationEndpointResponse struct {
	ContentType                       string
	Error                             *interface{}
	NotificationEndpointDiscriminator *interface{}
	StatusCode                        int64
}
