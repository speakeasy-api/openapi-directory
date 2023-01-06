package operations

type GetModelPropertiesQueryParams struct {
	Contributor *string `queryParam:"style=form,explode=true,name=contributor"`
	Title       *string `queryParam:"style=form,explode=true,name=title"`
}

type GetModelPropertiesRequest struct {
	QueryParams GetModelPropertiesQueryParams
}

type GetModelPropertiesResponse struct {
	ContentType string
	StatusCode  int64
}
