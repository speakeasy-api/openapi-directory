package operations

type DeleteTagPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
	TagID     string `pathParam:"style=simple,explode=false,name=tagId"`
}

type DeleteTagHeaders struct {
	TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
}

type DeleteTagRequest struct {
	PathParams DeleteTagPathParams
	Headers    DeleteTagHeaders
}

type DeleteTagResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
