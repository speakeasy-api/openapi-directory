package operations

type GetEntitySetSummaryQueryParams struct {
	Background     []string `queryParam:"style=form,explode=true,name=background"`
	ObjectCategory *string  `queryParam:"style=form,explode=true,name=object_category"`
	ObjectSlim     *string  `queryParam:"style=form,explode=true,name=object_slim"`
	Subject        []string `queryParam:"style=form,explode=true,name=subject"`
}

type GetEntitySetSummaryRequest struct {
	QueryParams GetEntitySetSummaryQueryParams
}

type GetEntitySetSummaryResponse struct {
	ContentType string
	StatusCode  int64
}
