package operations

import (
	"openapi/pkg/models/shared"
)

type GetImageKeywordSuggestionsSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetImageKeywordSuggestionsRequest struct {
	Request  shared.SearchEntitiesRequest `request:"mediaType=application/json"`
	Security GetImageKeywordSuggestionsSecurity
}

type GetImageKeywordSuggestionsResponse struct {
	ContentType            string
	SearchEntitiesResponse *interface{}
	StatusCode             int64
}
