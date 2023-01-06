package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveAllEuAsForAnEndUserQueryParams struct {
	EnduserID string `queryParam:"style=form,explode=true,name=enduser_id"`
	Limit     *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset    *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type RetrieveAllEuAsForAnEndUserRequest struct {
	QueryParams RetrieveAllEuAsForAnEndUserQueryParams
}

type RetrieveAllEuAsForAnEndUserResponse struct {
	ContentType                   string
	PaginatedEndUserAgreementList *shared.PaginatedEndUserAgreementList
	StatusCode                    int64
}
