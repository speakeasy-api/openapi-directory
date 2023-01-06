package operations

import (
	"openapi/pkg/models/shared"
)

type CreateANewRequisitionRequestsInput struct {
	Requisition  *shared.RequisitionInput `request:"mediaType=application/json"`
	Requisition1 *shared.RequisitionInput `request:"mediaType=application/x-www-form-urlencoded"`
	Requisition2 *shared.RequisitionInput `request:"mediaType=multipart/form-data"`
}

type CreateANewRequisitionRequest struct {
	Request CreateANewRequisitionRequestsInput
}

type CreateANewRequisitionResponse struct {
	ContentType string
	Requisition *shared.Requisition
	StatusCode  int64
}
