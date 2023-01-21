package operations

type DeleteOrgsIDOwnersIDPathParams struct {
	OrgID  string `pathParam:"style=simple,explode=false,name=orgID"`
	UserID string `pathParam:"style=simple,explode=false,name=userID"`
}

type DeleteOrgsIDOwnersIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteOrgsIDOwnersIDRequest struct {
	PathParams DeleteOrgsIDOwnersIDPathParams
	Headers    DeleteOrgsIDOwnersIDHeaders
}

type DeleteOrgsIDOwnersIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
