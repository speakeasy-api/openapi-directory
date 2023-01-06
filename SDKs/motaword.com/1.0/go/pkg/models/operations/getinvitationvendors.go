package operations

import (
	"openapi/pkg/models/shared"
)

type GetInvitationVendorsRequest struct {
	Request []shared.FileNeedsVendor `request:"mediaType=application/json"`
}

type GetInvitationVendorsResponse struct {
	ContentType          string
	Error                *shared.Error
	StatusCode           int64
	VendorInvitationList *shared.VendorInvitationList
}
