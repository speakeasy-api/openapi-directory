package operations

type GetModelQueryQueryParams struct {
	Contributor *string `queryParam:"style=form,explode=true,name=contributor"`
	Title       *string `queryParam:"style=form,explode=true,name=title"`
}

type GetModelQueryRequest struct {
	QueryParams GetModelQueryQueryParams
}

type GetModelQueryResponse struct {
	ContentType string
	StatusCode  int64
}
