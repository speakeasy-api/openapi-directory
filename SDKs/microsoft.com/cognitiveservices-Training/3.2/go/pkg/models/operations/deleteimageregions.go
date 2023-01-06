package operations

type DeleteImageRegionsPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DeleteImageRegionsQueryParams struct {
	RegionIds []string `queryParam:"style=form,explode=false,name=regionIds"`
}

type DeleteImageRegionsRequest struct {
	PathParams  DeleteImageRegionsPathParams
	QueryParams DeleteImageRegionsQueryParams
}

type DeleteImageRegionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
