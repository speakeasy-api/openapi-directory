package operations

import (
	"openapi/pkg/models/shared"
)

type GetCommissionsResponse struct {
	CommissionList *shared.CommissionList
	ContentType    string
	Error          *shared.Error
	StatusCode     int64
}
