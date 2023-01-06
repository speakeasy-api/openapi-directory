package operations

type DeleteIterationPathParams struct {
	IterationID string `pathParam:"style=simple,explode=false,name=iterationId"`
	ProjectID   string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DeleteIterationRequest struct {
	PathParams DeleteIterationPathParams
}

type DeleteIterationResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
