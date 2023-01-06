package operations

import (
	"openapi/pkg/models/shared"
)

type UploadImageSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type UploadImageRequest struct {
	Request  shared.ImageCreateRequest `request:"mediaType=application/json"`
	Security UploadImageSecurity
}

type UploadImageResponse struct {
	ComputerVisionImageCreateResponse *shared.ComputerVisionImageCreateResponse
	ContentType                       string
	StatusCode                        int64
}
