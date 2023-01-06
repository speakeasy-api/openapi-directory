package operations

type DeletePredictionPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type DeletePredictionQueryParams struct {
	Ids []string `queryParam:"style=form,explode=false,name=ids"`
}

type DeletePredictionRequest struct {
	PathParams  DeletePredictionPathParams
	QueryParams DeletePredictionQueryParams
}

type DeletePredictionResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
