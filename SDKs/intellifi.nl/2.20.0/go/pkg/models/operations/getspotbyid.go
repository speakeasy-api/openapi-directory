package operations

type GetSpotByIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSpotByIDRequest struct {
	PathParams GetSpotByIDPathParams
}

type GetSpotByIDResponse struct {
	ContentType string
	SpotGet     map[string]interface{}
	StatusCode  int64
}
