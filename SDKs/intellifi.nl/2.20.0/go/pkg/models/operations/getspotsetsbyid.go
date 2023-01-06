package operations

type GetSpotSetsByIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSpotSetsByIDRequest struct {
	PathParams GetSpotSetsByIDPathParams
}

type GetSpotSetsByIDResponse struct {
	ContentType string
	SpotSet     map[string]interface{}
	StatusCode  int64
}
