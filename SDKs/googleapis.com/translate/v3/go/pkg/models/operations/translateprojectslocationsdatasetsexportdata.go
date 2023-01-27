package operations

import (
	"openapi/pkg/models/shared"
)

type TranslateProjectsLocationsDatasetsExportDataPathParams struct {
	Dataset string `pathParam:"style=simple,explode=false,name=dataset"`
}

type TranslateProjectsLocationsDatasetsExportDataQueryParams struct {
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

type TranslateProjectsLocationsDatasetsExportDataSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TranslateProjectsLocationsDatasetsExportDataSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type TranslateProjectsLocationsDatasetsExportDataSecurity struct {
	Option1 *TranslateProjectsLocationsDatasetsExportDataSecurityOption1 `security:"option"`
	Option2 *TranslateProjectsLocationsDatasetsExportDataSecurityOption2 `security:"option"`
}

type TranslateProjectsLocationsDatasetsExportDataRequest struct {
	PathParams  TranslateProjectsLocationsDatasetsExportDataPathParams
	QueryParams TranslateProjectsLocationsDatasetsExportDataQueryParams
	Request     *shared.ExportDataRequest `request:"mediaType=application/json"`
	Security    TranslateProjectsLocationsDatasetsExportDataSecurity
}

type TranslateProjectsLocationsDatasetsExportDataResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
