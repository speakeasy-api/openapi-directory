package operations

import (
	"openapi/pkg/models/shared"
)

type GetVariantAnalyzePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetVariantAnalyzeRequest struct {
	PathParams GetVariantAnalyzePathParams
}

type GetVariantAnalyzeResponse struct {
	Associations []shared.Association
	ContentType  string
	StatusCode   int64
}
