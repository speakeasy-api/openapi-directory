package callbacks

type MessageStatusRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type MessageStatusResponse struct {
	ContentType string
	StatusCode  int64
}
