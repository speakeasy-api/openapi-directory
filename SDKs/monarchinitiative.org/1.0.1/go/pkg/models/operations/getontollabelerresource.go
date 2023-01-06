package operations

type GetOntolLabelerResourceQueryParams struct {
	ID []string `queryParam:"style=form,explode=true,name=id"`
}

type GetOntolLabelerResourceRequest struct {
	QueryParams GetOntolLabelerResourceQueryParams
}

type GetOntolLabelerResourceResponse struct {
	ContentType string
	StatusCode  int64
}
