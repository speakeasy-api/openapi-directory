package operations

type CreateTicketRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type CreateTicketResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
