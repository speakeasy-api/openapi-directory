package operations

type GetTicketInfoPathParams struct {
	TicketID string `pathParam:"style=simple,explode=false,name=ticketId"`
}

type GetTicketInfoRequest struct {
	PathParams GetTicketInfoPathParams
}

type GetTicketInfoResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
