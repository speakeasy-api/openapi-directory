package operations

import (
	"openapi/pkg/models/shared"
)

type GetStyleGuidesPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=projectId"`
}

type GetStyleGuidesWithEnum string

const (
	GetStyleGuidesWithEnumPreview GetStyleGuidesWithEnum = "preview"
)

type GetStyleGuidesQueryParams struct {
	With []GetStyleGuidesWithEnum `queryParam:"style=form,explode=true,name=with[]"`
}

type GetStyleGuidesRequest struct {
	PathParams  GetStyleGuidesPathParams
	QueryParams GetStyleGuidesQueryParams
}

type GetStyleGuidesResponse struct {
	ContentType    string
	Error          *shared.Error
	StatusCode     int64
	StyleGuideList *shared.StyleGuideList
}
