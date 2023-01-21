package operations

import (
	"openapi/pkg/models/shared"
)

type ApplyTemplateRequests struct {
	TemplateApply  *shared.TemplateApply `request:"mediaType=application/json"`
	TemplateApply1 *shared.TemplateApply `request:"mediaType=application/x-jsonnet"`
	TextYml        []byte                `request:"mediaType=text/yml"`
}

type ApplyTemplateRequest struct {
	Request ApplyTemplateRequests
}

type ApplyTemplateResponse struct {
	ContentType     string
	Error           *interface{}
	StatusCode      int64
	TemplateSummary *shared.TemplateSummary
}
