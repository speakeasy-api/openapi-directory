package operations

import (
	"openapi/pkg/models/shared"
)

type ListCarrierPackageTypesPathParams struct {
	CarrierID string `pathParam:"style=simple,explode=false,name=carrier_id"`
}

type ListCarrierPackageTypesRequest struct {
	PathParams ListCarrierPackageTypesPathParams
}

type ListCarrierPackageTypesResponse struct {
	ContentType                         string
	StatusCode                          int64
	ErrorResponseBody                   *shared.ErrorResponseBody
	ListCarrierPackageTypesResponseBody *shared.ListCarrierPackageTypesResponseBody
}
