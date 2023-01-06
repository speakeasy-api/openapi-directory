package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateEditorInstanceSecurity struct {
	CustomerAccessCode shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type UpdateEditorInstanceRequest struct {
	Request  *shared.UpdateVideoEditorRequest `request:"mediaType=application/json"`
	Security UpdateEditorInstanceSecurity
}

type UpdateEditorInstanceResponse struct {
	ContentType string
	StatusCode  int64
}
