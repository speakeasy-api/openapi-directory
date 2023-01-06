package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTagPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
	TagID     string `pathParam:"style=simple,explode=false,name=tagId"`
}

type UpdateTagRequestsInput struct {
	ApplicationXML []byte           `request:"mediaType=application/xml"`
	Tag            *shared.TagInput `request:"mediaType=application/json"`
	Tag1           *shared.TagInput `request:"mediaType=application/x-www-form-urlencoded"`
	TextXML        []byte           `request:"mediaType=text/xml"`
}

type UpdateTagRequest struct {
	PathParams UpdateTagPathParams
	Request    UpdateTagRequestsInput
}

type UpdateTagResponse struct {
	Body              []byte
	ContentType       string
	CustomVisionError *shared.CustomVisionError
	StatusCode        int64
	Tag               *shared.Tag
}
