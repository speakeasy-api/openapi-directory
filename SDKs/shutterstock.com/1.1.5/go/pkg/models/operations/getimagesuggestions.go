package operations

import (
	"openapi/pkg/models/shared"
)

type GetImageSuggestionsQueryParams struct {
	Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
	Query string `queryParam:"style=form,explode=true,name=query"`
}

type GetImageSuggestionsSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetImageSuggestionsRequest struct {
	QueryParams GetImageSuggestionsQueryParams
	Security    GetImageSuggestionsSecurity
}

type GetImageSuggestionsResponse struct {
	ContentType string
	StatusCode  int64
	Suggestions *shared.Suggestions
}
