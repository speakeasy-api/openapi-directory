package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccessTokenSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetAccessTokenRequest struct {
	Security GetAccessTokenSecurity
}

type GetAccessTokenResponse struct {
	AccessTokenDetails *shared.AccessTokenDetails
	ContentType        string
	StatusCode         int64
}
