package operations

import (
	"openapi/pkg/models/shared"
)

type DataformProjectsLocationsRepositoriesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DataformProjectsLocationsRepositoriesCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	RepositoryID   *string           `queryParam:"style=form,explode=true,name=repositoryId"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DataformProjectsLocationsRepositoriesCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataformProjectsLocationsRepositoriesCreateRequest struct {
	PathParams  DataformProjectsLocationsRepositoriesCreatePathParams
	QueryParams DataformProjectsLocationsRepositoriesCreateQueryParams
	Request     *shared.RepositoryInput `request:"mediaType=application/json"`
	Security    DataformProjectsLocationsRepositoriesCreateSecurity
}

type DataformProjectsLocationsRepositoriesCreateResponse struct {
	ContentType string
	Repository  *shared.Repository
	StatusCode  int64
}
