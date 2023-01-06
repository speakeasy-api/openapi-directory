package operations

import (
	"openapi/pkg/models/shared"
)

type LicenseEditorialVideoSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type LicenseEditorialVideoRequest struct {
	Request  shared.LicenseEditorialVideoContentRequest `request:"mediaType=application/json"`
	Security LicenseEditorialVideoSecurity
}

type LicenseEditorialVideoResponse struct {
	ContentType                    string
	LicenseEditorialContentResults *interface{}
	StatusCode                     int64
}
