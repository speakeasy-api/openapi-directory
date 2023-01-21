package operations

type DeleteScrapersIDPathParams struct {
	ScraperTargetID string `pathParam:"style=simple,explode=false,name=scraperTargetID"`
}

type DeleteScrapersIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteScrapersIDRequest struct {
	PathParams DeleteScrapersIDPathParams
	Headers    DeleteScrapersIDHeaders
}

type DeleteScrapersIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
