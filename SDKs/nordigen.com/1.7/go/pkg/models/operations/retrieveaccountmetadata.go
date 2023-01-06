package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveAccountMetadataPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type RetrieveAccountMetadataRequest struct {
	PathParams RetrieveAccountMetadataPathParams
}

type RetrieveAccountMetadataResponse struct {
	Account     *shared.Account
	ContentType string
	StatusCode  int64
}
