package operations

import (
	"openapi/pkg/models/shared"
)

type WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreateQueryParams struct {
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
	ValidateOnly   *bool             `queryParam:"style=form,explode=true,name=validateOnly"`
	WorkstationID  *string           `queryParam:"style=form,explode=true,name=workstationId"`
}

type WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreateRequest struct {
	PathParams  WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreatePathParams
	QueryParams WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreateQueryParams
	Request     *shared.WorkstationInput `request:"mediaType=application/json"`
	Security    WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreateSecurity
}

type WorkstationsProjectsLocationsWorkstationClustersWorkstationConfigsWorkstationsCreateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
