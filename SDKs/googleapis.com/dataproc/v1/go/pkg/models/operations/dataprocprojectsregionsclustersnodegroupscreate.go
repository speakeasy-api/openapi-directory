package operations

import (
	"openapi/pkg/models/shared"
)

type DataprocProjectsRegionsClustersNodeGroupsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type DataprocProjectsRegionsClustersNodeGroupsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	NodeGroupID    *string           `queryParam:"style=form,explode=true,name=nodeGroupId"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	RequestID      *string           `queryParam:"style=form,explode=true,name=requestId"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DataprocProjectsRegionsClustersNodeGroupsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DataprocProjectsRegionsClustersNodeGroupsCreateRequest struct {
	PathParams  DataprocProjectsRegionsClustersNodeGroupsCreatePathParams
	QueryParams DataprocProjectsRegionsClustersNodeGroupsCreateQueryParams
	Request     *shared.NodeGroupInput `request:"mediaType=application/json"`
	Security    DataprocProjectsRegionsClustersNodeGroupsCreateSecurity
}

type DataprocProjectsRegionsClustersNodeGroupsCreateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
