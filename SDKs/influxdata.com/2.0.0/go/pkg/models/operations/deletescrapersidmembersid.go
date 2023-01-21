package operations

type DeleteScrapersIDMembersIDPathParams struct {
	ScraperTargetID string `pathParam:"style=simple,explode=false,name=scraperTargetID"`
	UserID          string `pathParam:"style=simple,explode=false,name=userID"`
}

type DeleteScrapersIDMembersIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteScrapersIDMembersIDRequest struct {
	PathParams DeleteScrapersIDMembersIDPathParams
	Headers    DeleteScrapersIDMembersIDHeaders
}

type DeleteScrapersIDMembersIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
