package operations

import (
	"openapi/pkg/models/shared"
)

type ListMoodsSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type ListMoodsRequest struct {
	Security ListMoodsSecurity
}

type ListMoodsResponse struct {
	ContentType string
	MoodList    *shared.MoodList
	StatusCode  int64
}
