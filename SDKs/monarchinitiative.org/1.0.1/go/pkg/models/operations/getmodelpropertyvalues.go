package operations

type GetModelPropertyValuesQueryParams struct {
	Contributor *string `queryParam:"style=form,explode=true,name=contributor"`
	Title       *string `queryParam:"style=form,explode=true,name=title"`
}

type GetModelPropertyValuesRequest struct {
	QueryParams GetModelPropertyValuesQueryParams
}

type GetModelPropertyValuesResponse struct {
	ContentType string
	StatusCode  int64
}
