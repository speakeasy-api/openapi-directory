package operations

import (
	"openapi/pkg/models/shared"
)

type RequisitionByIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type RequisitionByIDRequest struct {
	PathParams RequisitionByIDPathParams
}

type RequisitionByIDResponse struct {
	ContentType string
	Requisition *shared.Requisition
	StatusCode  int64
}
