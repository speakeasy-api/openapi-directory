package operations

type DeleteTagPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
	TagID     string `pathParam:"style=simple,explode=false,name=tagId"`
}

type DeleteTagRequest struct {
	PathParams DeleteTagPathParams
}

type DeleteTagResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
