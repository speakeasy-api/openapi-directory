package operations

type DeleteOrgsIDMembersIDPathParams struct {
	OrgID  string `pathParam:"style=simple,explode=false,name=orgID"`
	UserID string `pathParam:"style=simple,explode=false,name=userID"`
}

type DeleteOrgsIDMembersIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteOrgsIDMembersIDRequest struct {
	PathParams DeleteOrgsIDMembersIDPathParams
	Headers    DeleteOrgsIDMembersIDHeaders
}

type DeleteOrgsIDMembersIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
