package operations

import (
	"openapi/pkg/models/shared"
)

type SearchEverywhereIncludeEnum string

const (
	SearchEverywhereIncludeEnumProjects  SearchEverywhereIncludeEnum = "projects"
	SearchEverywhereIncludeEnumDocuments SearchEverywhereIncludeEnum = "documents"
	SearchEverywhereIncludeEnumStrings   SearchEverywhereIncludeEnum = "strings"
)

type SearchEverywhereQueryParams struct {
	Include []SearchEverywhereIncludeEnum `queryParam:"style=form,explode=true,name=include[]"`
	Page    *int64                        `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64                        `queryParam:"style=form,explode=true,name=per_page"`
	Query   string                        `queryParam:"style=form,explode=true,name=query"`
}

type SearchEverywhereRequest struct {
	QueryParams SearchEverywhereQueryParams
}

type SearchEverywhereResponse struct {
	ContentType            string
	SearchEverywhereResult *shared.SearchEverywhereResult
	StatusCode             int64
}
