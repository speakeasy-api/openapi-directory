package operations

type DeleteEuaByIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteEuaByIDRequest struct {
	PathParams DeleteEuaByIDPathParams
}

type DeleteEuaByIDResponse struct {
	ContentType string
	StatusCode  int64
}
