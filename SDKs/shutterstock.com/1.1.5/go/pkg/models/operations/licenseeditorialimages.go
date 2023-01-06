package operations

import (
	"openapi/pkg/models/shared"
)

type LicenseEditorialImagesSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type LicenseEditorialImagesRequest struct {
	Request  shared.LicenseEditorialContentRequest `request:"mediaType=application/json"`
	Security LicenseEditorialImagesSecurity
}

type LicenseEditorialImagesResponse struct {
	ContentType                    string
	LicenseEditorialContentResults *interface{}
	StatusCode                     int64
}
