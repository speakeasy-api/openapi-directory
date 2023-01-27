package operations

import (
	"openapi/pkg/models/shared"
)

type DatamigrationProjectsLocationsPrivateConnectionsGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type DatamigrationProjectsLocationsPrivateConnectionsGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DatamigrationProjectsLocationsPrivateConnectionsGetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatamigrationProjectsLocationsPrivateConnectionsGetRequest struct {
	PathParams  DatamigrationProjectsLocationsPrivateConnectionsGetPathParams
	QueryParams DatamigrationProjectsLocationsPrivateConnectionsGetQueryParams
	Security    DatamigrationProjectsLocationsPrivateConnectionsGetSecurity
}

type DatamigrationProjectsLocationsPrivateConnectionsGetResponse struct {
	ContentType       string
	PrivateConnection *shared.PrivateConnection
	StatusCode        int64
}
