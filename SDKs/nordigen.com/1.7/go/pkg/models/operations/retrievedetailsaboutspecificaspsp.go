package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveDetailsAboutSpecificAspspPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type RetrieveDetailsAboutSpecificAspspRequest struct {
	PathParams RetrieveDetailsAboutSpecificAspspPathParams
}

type RetrieveDetailsAboutSpecificAspspResponse struct {
	Aspsp       *shared.Aspsp
	ContentType string
	StatusCode  int64
}
