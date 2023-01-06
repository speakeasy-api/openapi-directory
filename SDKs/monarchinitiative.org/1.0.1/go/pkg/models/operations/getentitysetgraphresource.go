package operations

type GetEntitySetGraphResourceQueryParams struct {
	Background     []string `queryParam:"style=form,explode=true,name=background"`
	ObjectCategory *string  `queryParam:"style=form,explode=true,name=object_category"`
	ObjectSlim     *string  `queryParam:"style=form,explode=true,name=object_slim"`
	Subject        []string `queryParam:"style=form,explode=true,name=subject"`
}

type GetEntitySetGraphResourceRequest struct {
	QueryParams GetEntitySetGraphResourceQueryParams
}

type GetEntitySetGraphResourceResponse struct {
	ContentType string
	StatusCode  int64
}
