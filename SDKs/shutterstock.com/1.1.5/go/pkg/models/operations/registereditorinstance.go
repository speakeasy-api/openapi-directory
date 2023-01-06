package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterEditorInstanceSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type RegisterEditorInstanceRequest struct {
	Request  *shared.RegisterVideoEditorRequest `request:"mediaType=application/json"`
	Security RegisterEditorInstanceSecurity
}

type RegisterEditorInstanceResponse struct {
	ContentType string
	StatusCode  int64
}
