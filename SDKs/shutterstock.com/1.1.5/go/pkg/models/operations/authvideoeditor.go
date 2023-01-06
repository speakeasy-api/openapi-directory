package operations

import (
	"openapi/pkg/models/shared"
)

type AuthVideoEditorSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type AuthVideoEditorRequest struct {
	Request  *shared.VideoEditorTokenRequest `request:"mediaType=application/json"`
	Security AuthVideoEditorSecurity
}

type AuthVideoEditorResponse struct {
	ContentType              string
	StatusCode               int64
	VideoEditorTokenResponse *shared.VideoEditorTokenResponse
}
