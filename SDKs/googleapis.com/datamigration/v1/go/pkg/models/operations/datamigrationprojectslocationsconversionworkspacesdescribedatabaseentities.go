package operations

import (
	"openapi/pkg/models/shared"
)

type DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesPathParams struct {
	ConversionWorkspace string `pathParam:"style=simple,explode=false,name=conversionWorkspace"`
}

type DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesTreeEnum string

const (
	DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesTreeEnumDbTreeTypeUnspecified DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesTreeEnum = "DB_TREE_TYPE_UNSPECIFIED"
	DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesTreeEnumSourceTree            DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesTreeEnum = "SOURCE_TREE"
	DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesTreeEnumDraftTree             DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesTreeEnum = "DRAFT_TREE"
	DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesTreeEnumDestinationTree       DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesTreeEnum = "DESTINATION_TREE"
)

type DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                                                   `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                                                             `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                                                     `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                                                             `queryParam:"style=form,explode=true,name=callback"`
	CommitID       *string                                                                             `queryParam:"style=form,explode=true,name=commitId"`
	Fields         *string                                                                             `queryParam:"style=form,explode=true,name=fields"`
	Filter         *string                                                                             `queryParam:"style=form,explode=true,name=filter"`
	Key            *string                                                                             `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                                                             `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64                                                                              `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string                                                                             `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                                                               `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                                                             `queryParam:"style=form,explode=true,name=quotaUser"`
	Tree           *DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesTreeEnum `queryParam:"style=form,explode=true,name=tree"`
	Uncommitted    *bool                                                                               `queryParam:"style=form,explode=true,name=uncommitted"`
	UploadType     *string                                                                             `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                                                             `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesRequest struct {
	PathParams  DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesPathParams
	QueryParams DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesQueryParams
	Security    DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesSecurity
}

type DatamigrationProjectsLocationsConversionWorkspacesDescribeDatabaseEntitiesResponse struct {
	ContentType                      string
	DescribeDatabaseEntitiesResponse *shared.DescribeDatabaseEntitiesResponse
	StatusCode                       int64
}
