package operations

type HashtagStatsQueryParams struct {
	Tags []interface{} `queryParam:"style=form,explode=false,name=tags"`
}

type HashtagStatsRequest struct {
	QueryParams HashtagStatsQueryParams
}

type HashtagStatsResponse struct {
	ContentType string
	StatusCode  int64
}
