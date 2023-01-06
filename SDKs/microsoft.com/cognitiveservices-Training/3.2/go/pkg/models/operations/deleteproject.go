package operations

type DeleteProjectPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DeleteProjectRequest struct {
	PathParams DeleteProjectPathParams
}

type DeleteProjectResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
