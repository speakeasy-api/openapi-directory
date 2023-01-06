package operations

type AutoHashtagQueryParams struct {
	HashtagPosition *string `queryParam:"style=form,explode=true,name=hashtagPosition"`
	MaxHashtags     *int64  `queryParam:"style=form,explode=true,name=maxHashtags"`
	Post            string  `queryParam:"style=form,explode=true,name=post"`
}

type AutoHashtagRequest struct {
	QueryParams AutoHashtagQueryParams
}

type AutoHashtagResponse struct {
	ContentType string
	StatusCode  int64
}
