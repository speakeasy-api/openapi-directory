package operations

import (
	"openapi/pkg/models/shared"
)

type LicenseEditorialImageSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type LicenseEditorialImageRequest struct {
	Request  shared.LicenseEditorialContentRequest `request:"mediaType=application/json"`
	Security LicenseEditorialImageSecurity
}

type LicenseEditorialImageResponse struct {
	ContentType                    string
	LicenseEditorialContentResults *interface{}
	StatusCode                     int64
}
