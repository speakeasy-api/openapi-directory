package operations

import (
	"openapi/pkg/models/shared"
)

type GetVideoPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetVideoViewEnum string

const (
	GetVideoViewEnumMinimal GetVideoViewEnum = "minimal"
	GetVideoViewEnumFull    GetVideoViewEnum = "full"
)

type GetVideoQueryParams struct {
	Language *shared.LanguageEnum `queryParam:"style=form,explode=true,name=language"`
	View     *GetVideoViewEnum    `queryParam:"style=form,explode=true,name=view"`
}

type GetVideoSecurity struct {
	Basic              *shared.SchemeBasic              `security:"scheme,type=http,subtype=basic"`
	CustomerAccessCode *shared.SchemeCustomerAccessCode `security:"scheme,type=oauth2"`
}

type GetVideoRequest struct {
	PathParams  GetVideoPathParams
	QueryParams GetVideoQueryParams
	Security    GetVideoSecurity
}

type GetVideoResponse struct {
	ContentType string
	StatusCode  int64
	Video       *shared.Video
}
