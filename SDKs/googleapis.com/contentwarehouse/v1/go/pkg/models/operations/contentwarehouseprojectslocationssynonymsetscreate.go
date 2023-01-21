package operations

import (
	"openapi/pkg/models/shared"
)

type ContentwarehouseProjectsLocationsSynonymSetsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ContentwarehouseProjectsLocationsSynonymSetsCreateQueryParams struct {
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

type ContentwarehouseProjectsLocationsSynonymSetsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ContentwarehouseProjectsLocationsSynonymSetsCreateRequest struct {
	PathParams  ContentwarehouseProjectsLocationsSynonymSetsCreatePathParams
	QueryParams ContentwarehouseProjectsLocationsSynonymSetsCreateQueryParams
	Request     *shared.GoogleCloudContentwarehouseV1SynonymSet `request:"mediaType=application/json"`
	Security    ContentwarehouseProjectsLocationsSynonymSetsCreateSecurity
}

type ContentwarehouseProjectsLocationsSynonymSetsCreateResponse struct {
	ContentType                             string
	GoogleCloudContentwarehouseV1SynonymSet *shared.GoogleCloudContentwarehouseV1SynonymSet
	StatusCode                              int64
}
