package operations

import (
	"openapi/pkg/models/shared"
)

type MembershipGetSecurity struct {
	Bearer shared.SchemeBearer `security:"scheme,type=oauth2"`
}

type MembershipGetRequest struct {
	Security MembershipGetSecurity
}

type MembershipGetResponse struct {
	ContentType    string
	MemberDTOS     []shared.MemberDto
	ProblemDetails *shared.ProblemDetails
	StatusCode     int64
}
