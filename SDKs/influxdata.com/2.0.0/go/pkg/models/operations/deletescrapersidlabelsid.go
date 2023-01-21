package operations

type DeleteScrapersIDLabelsIDPathParams struct {
	LabelID         string `pathParam:"style=simple,explode=false,name=labelID"`
	ScraperTargetID string `pathParam:"style=simple,explode=false,name=scraperTargetID"`
}

type DeleteScrapersIDLabelsIDHeaders struct {
	ZapTraceSpan *string `header:"style=simple,explode=false,name=Zap-Trace-Span"`
}

type DeleteScrapersIDLabelsIDRequest struct {
	PathParams DeleteScrapersIDLabelsIDPathParams
	Headers    DeleteScrapersIDLabelsIDHeaders
}

type DeleteScrapersIDLabelsIDResponse struct {
	ContentType string
	Error       *interface{}
	StatusCode  int64
}
