package operations

type HashtagSuggestionsQueryParams struct {
	Text string `queryParam:"style=form,explode=true,name=text"`
}

type HashtagSuggestionsRequest struct {
	QueryParams HashtagSuggestionsQueryParams
}

type HashtagSuggestionsResponse struct {
	ContentType string
	StatusCode  int64
}
