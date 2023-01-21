package operations

type DeleteScrapersIDOwnersIDPathParams struct {
	ScraperTargetID string `pathParam:"style=simple,explode=false,name=scraperTargetID"`
	UserID          string `pathParam:"style=simple,explode=false,name=userID"`
}

type DeleteScrapersIDOwnersIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteScrapersIDOwnersIDRequest struct {
	PathParams DeleteScrapersIDOwnersIDPathParams
	Headers    DeleteScrapersIDOwnersIDHeaders
}

type DeleteScrapersIDOwnersIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
