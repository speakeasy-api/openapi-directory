package operations

import (
	"openapi/pkg/models/shared"
)

type DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobsPathParams struct {
	ConversionWorkspace string `pathParam:"style=simple,explode=false,name=conversionWorkspace"`
}

type DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobsQueryParams struct {
	DollarXgafv                *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                        *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback                   *string           `queryParam:"style=form,explode=true,name=callback"`
	CompletedUntilTime         *string           `queryParam:"style=form,explode=true,name=completedUntilTime"`
	Fields                     *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                        *string           `queryParam:"style=form,explode=true,name=key"`
	MaxSize                    *int64            `queryParam:"style=form,explode=true,name=maxSize"`
	OauthToken                 *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint                *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                  *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	ReturnMostRecentPerJobType *bool             `queryParam:"style=form,explode=true,name=returnMostRecentPerJobType"`
	UploadType                 *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol             *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobsSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobsRequest struct {
	PathParams  DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobsPathParams
	QueryParams DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobsQueryParams
	Security    DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobsSecurity
}

type DatamigrationProjectsLocationsConversionWorkspacesSearchBackgroundJobsResponse struct {
	ContentType                  string
	SearchBackgroundJobsResponse *shared.SearchBackgroundJobsResponse
	StatusCode                   int64
}
