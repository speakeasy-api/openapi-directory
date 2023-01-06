package operations

type TrendingHashtagsQueryParams struct {
	Green *bool `queryParam:"style=form,explode=true,name=green"`
	Latin *bool `queryParam:"style=form,explode=true,name=latin"`
}

type TrendingHashtagsRequest struct {
	QueryParams TrendingHashtagsQueryParams
}

type TrendingHashtagsResponse struct {
	ContentType string
	StatusCode  int64
}
