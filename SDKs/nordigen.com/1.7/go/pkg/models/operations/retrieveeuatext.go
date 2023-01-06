package operations

type RetrieveEuaTextPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type RetrieveEuaTextRequest struct {
	PathParams RetrieveEuaTextPathParams
}

type RetrieveEuaTextResponse struct {
	ContentType string
	StatusCode  int64
}
