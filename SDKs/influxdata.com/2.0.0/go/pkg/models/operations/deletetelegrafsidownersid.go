package operations

type DeleteTelegrafsIDOwnersIDPathParams struct {
	TelegrafID string `pathParam:"style=simple,explode=false,name=telegrafID"`
	UserID     string `pathParam:"style=simple,explode=false,name=userID"`
}

type DeleteTelegrafsIDOwnersIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteTelegrafsIDOwnersIDRequest struct {
	PathParams DeleteTelegrafsIDOwnersIDPathParams
	Headers    DeleteTelegrafsIDOwnersIDHeaders
}

type DeleteTelegrafsIDOwnersIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
