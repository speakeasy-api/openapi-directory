package operations

type HashtagHistoryPathParams struct {
	Hashtag string `pathParam:"style=simple,explode=false,name=hashtag"`
}

type HashtagHistoryRequest struct {
	PathParams HashtagHistoryPathParams
}

type HashtagHistoryResponse struct {
	ContentType string
	StatusCode  int64
}
