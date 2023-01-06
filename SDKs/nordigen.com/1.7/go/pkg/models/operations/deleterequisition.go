package operations

type DeleteRequisitionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteRequisitionRequest struct {
	PathParams DeleteRequisitionPathParams
}

type DeleteRequisitionResponse struct {
	ContentType string
	StatusCode  int64
}
