package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserSubscriptionListSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetUserSubscriptionListRequest struct {
	Security GetUserSubscriptionListSecurity
}

type GetUserSubscriptionListResponse struct {
	ContentType          string
	StatusCode           int64
	SubscriptionDataList *interface{}
}
