package operations

type DeleteImageTagsPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DeleteImageTagsQueryParams struct {
	ImageIds []string `queryParam:"style=form,explode=false,name=imageIds"`
	TagIds   []string `queryParam:"style=form,explode=false,name=tagIds"`
}

type DeleteImageTagsRequest struct {
	PathParams  DeleteImageTagsPathParams
	QueryParams DeleteImageTagsQueryParams
}

type DeleteImageTagsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
