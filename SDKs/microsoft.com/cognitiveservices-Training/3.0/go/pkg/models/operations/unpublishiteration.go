package operations

type UnpublishIterationPathParams struct {
	IterationID string `pathParam:"style=simple,explode=false,name=iterationId"`
	ProjectID   string `pathParam:"style=simple,explode=false,name=projectId"`
}

type UnpublishIterationHeaders struct {
	TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
}

type UnpublishIterationRequest struct {
	PathParams UnpublishIterationPathParams
	Headers    UnpublishIterationHeaders
}

type UnpublishIterationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
