package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountResponse struct {
	Account                                    *shared.Account
	ContentType                                string
	GetAccount401ApplicationProblemPlusJSONAny *interface{}
	StatusCode                                 int64
}
