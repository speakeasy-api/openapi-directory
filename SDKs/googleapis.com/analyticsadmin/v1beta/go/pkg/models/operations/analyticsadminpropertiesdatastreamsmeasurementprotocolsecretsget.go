package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetQueryParams struct {
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

type AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetSecurity struct {
	Option1 *AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetSecurityOption1 `security:"option"`
	Option2 *AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetSecurityOption2 `security:"option"`
}

type AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetRequest struct {
	PathParams  AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetPathParams
	QueryParams AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetQueryParams
	Security    AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetSecurity
}

type AnalyticsadminPropertiesDataStreamsMeasurementProtocolSecretsGetResponse struct {
	ContentType                                         string
	GoogleAnalyticsAdminV1betaMeasurementProtocolSecret *shared.GoogleAnalyticsAdminV1betaMeasurementProtocolSecret
	StatusCode                                          int64
}
