package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAspspAuthorizationLinkPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CreateAspspAuthorizationLinkRequests struct {
	RequisitionLinkParams  *shared.RequisitionLinkParams `request:"mediaType=application/json"`
	RequisitionLinkParams1 *shared.RequisitionLinkParams `request:"mediaType=application/x-www-form-urlencoded"`
	RequisitionLinkParams2 *shared.RequisitionLinkParams `request:"mediaType=multipart/form-data"`
}

type CreateAspspAuthorizationLinkRequest struct {
	PathParams CreateAspspAuthorizationLinkPathParams
	Request    CreateAspspAuthorizationLinkRequests
}

type CreateAspspAuthorizationLinkResponse struct {
	ContentType      string
	RequisitionLinks *shared.RequisitionLinks
	StatusCode       int64
}
