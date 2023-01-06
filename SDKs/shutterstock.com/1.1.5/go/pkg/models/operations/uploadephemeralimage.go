package operations

import (
	"openapi/pkg/models/shared"
)

type UploadEphemeralImageSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type UploadEphemeralImageRequest struct {
	Request  shared.ImageCreateRequest `request:"mediaType=application/json"`
	Security UploadEphemeralImageSecurity
}

type UploadEphemeralImageResponse struct {
	ContentType         string
	ImageCreateResponse *shared.ImageCreateResponse
	StatusCode          int64
}
