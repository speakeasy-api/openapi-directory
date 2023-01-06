package operations

type AutoEmojifyQueryParams struct {
	Text string `queryParam:"style=form,explode=true,name=text"`
}

type AutoEmojifyRequest struct {
	QueryParams AutoEmojifyQueryParams
}

type AutoEmojifyResponse struct {
	ContentType string
	StatusCode  int64
}
