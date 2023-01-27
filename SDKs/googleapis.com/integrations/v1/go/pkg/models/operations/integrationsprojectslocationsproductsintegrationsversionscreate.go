package operations

import (
	"openapi/pkg/models/shared"
)

type IntegrationsProjectsLocationsProductsIntegrationsVersionsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type IntegrationsProjectsLocationsProductsIntegrationsVersionsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	NewIntegration *bool             `queryParam:"style=form,explode=true,name=newIntegration"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type IntegrationsProjectsLocationsProductsIntegrationsVersionsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type IntegrationsProjectsLocationsProductsIntegrationsVersionsCreateRequest struct {
	PathParams  IntegrationsProjectsLocationsProductsIntegrationsVersionsCreatePathParams
	QueryParams IntegrationsProjectsLocationsProductsIntegrationsVersionsCreateQueryParams
	Request     *shared.GoogleCloudIntegrationsV1alphaIntegrationVersionInput `request:"mediaType=application/json"`
	Security    IntegrationsProjectsLocationsProductsIntegrationsVersionsCreateSecurity
}

type IntegrationsProjectsLocationsProductsIntegrationsVersionsCreateResponse struct {
	ContentType                                      string
	GoogleCloudIntegrationsV1alphaIntegrationVersion *shared.GoogleCloudIntegrationsV1alphaIntegrationVersion
	StatusCode                                       int64
}
