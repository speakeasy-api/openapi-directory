package operations

import (
	"openapi/pkg/models/shared"
)

type MonitoringProjectsSnoozesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type MonitoringProjectsSnoozesCreateQueryParams struct {
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

type MonitoringProjectsSnoozesCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsSnoozesCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type MonitoringProjectsSnoozesCreateSecurity struct {
	Option1 *MonitoringProjectsSnoozesCreateSecurityOption1 `security:"option"`
	Option2 *MonitoringProjectsSnoozesCreateSecurityOption2 `security:"option"`
}

type MonitoringProjectsSnoozesCreateRequest struct {
	PathParams  MonitoringProjectsSnoozesCreatePathParams
	QueryParams MonitoringProjectsSnoozesCreateQueryParams
	Request     *shared.Snooze `request:"mediaType=application/json"`
	Security    MonitoringProjectsSnoozesCreateSecurity
}

type MonitoringProjectsSnoozesCreateResponse struct {
	ContentType string
	Snooze      *shared.Snooze
	StatusCode  int64
}
