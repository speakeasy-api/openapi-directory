package operations

import (
	"openapi/pkg/models/shared"
)

type ExportTemplateRequest struct {
	Request *interface{} `request:"mediaType=application/json"`
}

type ExportTemplateResponse struct {
	Body        []byte
	ContentType string
	Error       *interface{}
	StatusCode  int64
	Template    []shared.Template
}
