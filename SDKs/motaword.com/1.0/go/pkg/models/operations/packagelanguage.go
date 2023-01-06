package operations

import (
	"openapi/pkg/models/shared"
)

type PackageLanguagePathParams struct {
	ID       int64  `pathParam:"style=simple,explode=false,name=id"`
	Language string `pathParam:"style=simple,explode=false,name=language"`
}

type PackageLanguageQueryParams struct {
	Async *int64 `queryParam:"style=form,explode=true,name=async"`
}

type PackageLanguageRequest struct {
	PathParams  PackageLanguagePathParams
	QueryParams PackageLanguageQueryParams
}

type PackageLanguageResponse struct {
	ContentType                                          string
	Error                                                *shared.Error
	Package                                              *shared.Package
	StatusCode                                           int64
	PackageLanguage200ApplicationOctetStreamBinaryString []byte
}
