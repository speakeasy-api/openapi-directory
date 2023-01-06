package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEuaRequestsInput struct {
	EndUserAgreement  *shared.EndUserAgreementInput `request:"mediaType=application/json"`
	EndUserAgreement1 *shared.EndUserAgreementInput `request:"mediaType=application/x-www-form-urlencoded"`
	EndUserAgreement2 *shared.EndUserAgreementInput `request:"mediaType=multipart/form-data"`
}

type CreateEuaRequest struct {
	Request CreateEuaRequestsInput
}

type CreateEuaResponse struct {
	ContentType      string
	EndUserAgreement *shared.EndUserAgreement
	StatusCode       int64
}
