package operations

import (
	"openapi/pkg/models/shared"
)

type GetStyleGuidePathParams struct {
	ProjectID    int64 `pathParam:"style=simple,explode=false,name=projectId"`
	StyleGuideID int64 `pathParam:"style=simple,explode=false,name=styleGuideId"`
}

type GetStyleGuideWithEnum string

const (
	GetStyleGuideWithEnumPreview GetStyleGuideWithEnum = "preview"
)

type GetStyleGuideQueryParams struct {
	With []GetStyleGuideWithEnum `queryParam:"style=form,explode=true,name=with[]"`
}

type GetStyleGuideRequest struct {
	PathParams  GetStyleGuidePathParams
	QueryParams GetStyleGuideQueryParams
}

type GetStyleGuideResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
	StyleGuide  *shared.StyleGuide
}
