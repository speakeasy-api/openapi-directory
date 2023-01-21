package operations

type CreateCheckRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type CreateCheckResponse struct {
	CheckDiscriminator *interface{}
	ContentType        string
	Error              *interface{}
	StatusCode         int64
}
