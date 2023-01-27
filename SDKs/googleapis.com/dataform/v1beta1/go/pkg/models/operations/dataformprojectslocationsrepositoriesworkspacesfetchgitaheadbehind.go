package operations

import (
	"openapi/pkg/models/shared"
)

type DataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehindPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type DataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehindQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	RemoteBranch   *string           `queryParam:"style=form,explode=true,name=remoteBranch"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehindSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehindRequest struct {
	PathParams  DataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehindPathParams
	QueryParams DataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehindQueryParams
	Security    DataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehindSecurity
}

type DataformProjectsLocationsRepositoriesWorkspacesFetchGitAheadBehindResponse struct {
	ContentType                 string
	FetchGitAheadBehindResponse *shared.FetchGitAheadBehindResponse
	StatusCode                  int64
}
