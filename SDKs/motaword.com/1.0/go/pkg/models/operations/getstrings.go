package operations

import (
	"openapi/pkg/models/shared"
)

type GetStringsQueryParams struct {
	Page           *int64  `queryParam:"style=form,explode=true,name=page"`
	SourceLanguage *string `queryParam:"style=form,explode=true,name=source_language"`
}

type GetStringsRequest struct {
	QueryParams GetStringsQueryParams
}

type GetStringsResponse struct {
	ClientStrings *shared.ClientStrings
	ContentType   string
	StatusCode    int64
}
