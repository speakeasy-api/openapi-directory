package operations

type DeleteTelegrafsIDMembersIDPathParams struct {
	TelegrafID string `pathParam:"style=simple,explode=false,name=telegrafID"`
	UserID     string `pathParam:"style=simple,explode=false,name=userID"`
}

type DeleteTelegrafsIDMembersIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteTelegrafsIDMembersIDRequest struct {
	PathParams DeleteTelegrafsIDMembersIDPathParams
	Headers    DeleteTelegrafsIDMembersIDHeaders
}

type DeleteTelegrafsIDMembersIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
