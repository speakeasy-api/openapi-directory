package operations

type GetPrefixExpandPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetPrefixExpandRequest struct {
	PathParams GetPrefixExpandPathParams
}

type GetPrefixExpandResponse struct {
	ContentType string
	StatusCode  int64
}
