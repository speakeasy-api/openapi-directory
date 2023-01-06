package operations

type GetSpotsetsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSpotsetsIDRequest struct {
	PathParams GetSpotsetsIDPathParams
}

type GetSpotsetsIDResponse struct {
	ContentType string
	SpotSet     map[string]interface{}
	StatusCode  int64
}
