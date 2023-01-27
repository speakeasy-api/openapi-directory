package operations

import (
	"openapi/pkg/models/shared"
)

type ContactcenteraiplatformProjectsLocationsContactCentersListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ContactcenteraiplatformProjectsLocationsContactCentersListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Filter         *string           `queryParam:"style=form,explode=true,name=filter"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy        *string           `queryParam:"style=form,explode=true,name=orderBy"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ContactcenteraiplatformProjectsLocationsContactCentersListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ContactcenteraiplatformProjectsLocationsContactCentersListRequest struct {
	PathParams  ContactcenteraiplatformProjectsLocationsContactCentersListPathParams
	QueryParams ContactcenteraiplatformProjectsLocationsContactCentersListQueryParams
	Security    ContactcenteraiplatformProjectsLocationsContactCentersListSecurity
}

type ContactcenteraiplatformProjectsLocationsContactCentersListResponse struct {
	ContentType                string
	ListContactCentersResponse *shared.ListContactCentersResponse
	StatusCode                 int64
}
