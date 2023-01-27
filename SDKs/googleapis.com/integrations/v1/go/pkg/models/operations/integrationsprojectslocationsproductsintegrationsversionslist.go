package operations

import (
	"openapi/pkg/models/shared"
)

type IntegrationsProjectsLocationsProductsIntegrationsVersionsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type IntegrationsProjectsLocationsProductsIntegrationsVersionsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	FieldMask      *string           `queryParam:"style=form,explode=true,name=fieldMask"`
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

type IntegrationsProjectsLocationsProductsIntegrationsVersionsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type IntegrationsProjectsLocationsProductsIntegrationsVersionsListRequest struct {
	PathParams  IntegrationsProjectsLocationsProductsIntegrationsVersionsListPathParams
	QueryParams IntegrationsProjectsLocationsProductsIntegrationsVersionsListQueryParams
	Security    IntegrationsProjectsLocationsProductsIntegrationsVersionsListSecurity
}

type IntegrationsProjectsLocationsProductsIntegrationsVersionsListResponse struct {
	ContentType                                                   string
	GoogleCloudIntegrationsV1alphaListIntegrationVersionsResponse *shared.GoogleCloudIntegrationsV1alphaListIntegrationVersionsResponse
	StatusCode                                                    int64
}
