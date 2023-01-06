package operations

type HashtagsCleanerQueryParams struct {
	Post string `queryParam:"style=form,explode=true,name=post"`
}

type HashtagsCleanerRequest struct {
	QueryParams HashtagsCleanerQueryParams
}

type HashtagsCleanerResponse struct {
	ContentType string
	StatusCode  int64
}
