package operations

type GetModelObjectPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetModelObjectRequest struct {
	PathParams GetModelObjectPathParams
}

type GetModelObjectResponse struct {
	ContentType string
	StatusCode  int64
}
