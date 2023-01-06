package operations

type EmojiSuggestionsQueryParams struct {
	Text string `queryParam:"style=form,explode=true,name=text"`
}

type EmojiSuggestionsRequest struct {
	QueryParams EmojiSuggestionsQueryParams
}

type EmojiSuggestionsResponse struct {
	ContentType string
	StatusCode  int64
}
