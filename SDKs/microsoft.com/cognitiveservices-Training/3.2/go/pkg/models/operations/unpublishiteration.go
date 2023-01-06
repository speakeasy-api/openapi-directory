package operations

type UnpublishIterationPathParams struct {
	IterationID string `pathParam:"style=simple,explode=false,name=iterationId"`
	ProjectID   string `pathParam:"style=simple,explode=false,name=projectId"`
}

type UnpublishIterationRequest struct {
	PathParams UnpublishIterationPathParams
}

type UnpublishIterationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
