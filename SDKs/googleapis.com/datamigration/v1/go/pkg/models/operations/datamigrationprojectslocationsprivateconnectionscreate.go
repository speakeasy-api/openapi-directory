package operations

import (
	"openapi/pkg/models/shared"
)

type DatamigrationProjectsLocationsPrivateConnectionsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DatamigrationProjectsLocationsPrivateConnectionsCreateQueryParams struct {
	DollarXgafv         *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken         *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                 *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback            *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields              *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                 *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken          *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint         *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	PrivateConnectionID *string           `queryParam:"style=form,explode=true,name=privateConnectionId"`
	QuotaUser           *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	RequestID           *string           `queryParam:"style=form,explode=true,name=requestId"`
	SkipValidation      *bool             `queryParam:"style=form,explode=true,name=skipValidation"`
	UploadType          *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol      *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DatamigrationProjectsLocationsPrivateConnectionsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatamigrationProjectsLocationsPrivateConnectionsCreateRequest struct {
	PathParams  DatamigrationProjectsLocationsPrivateConnectionsCreatePathParams
	QueryParams DatamigrationProjectsLocationsPrivateConnectionsCreateQueryParams
	Request     *shared.PrivateConnectionInput `request:"mediaType=application/json"`
	Security    DatamigrationProjectsLocationsPrivateConnectionsCreateSecurity
}

type DatamigrationProjectsLocationsPrivateConnectionsCreateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
