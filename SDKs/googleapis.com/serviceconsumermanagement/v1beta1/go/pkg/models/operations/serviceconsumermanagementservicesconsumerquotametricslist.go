package operations

import (
	"openapi/pkg/models/shared"
)

type ServiceconsumermanagementServicesConsumerQuotaMetricsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ServiceconsumermanagementServicesConsumerQuotaMetricsListViewEnum string

const (
	ServiceconsumermanagementServicesConsumerQuotaMetricsListViewEnumQuotaViewUnspecified ServiceconsumermanagementServicesConsumerQuotaMetricsListViewEnum = "QUOTA_VIEW_UNSPECIFIED"
	ServiceconsumermanagementServicesConsumerQuotaMetricsListViewEnumBasic                ServiceconsumermanagementServicesConsumerQuotaMetricsListViewEnum = "BASIC"
	ServiceconsumermanagementServicesConsumerQuotaMetricsListViewEnumFull                 ServiceconsumermanagementServicesConsumerQuotaMetricsListViewEnum = "FULL"
)

type ServiceconsumermanagementServicesConsumerQuotaMetricsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                                  `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                                            `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                                    `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                                            `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                                            `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                                            `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                                            `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64                                                             `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string                                                            `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                                              `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                                            `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                                            `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                                            `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *ServiceconsumermanagementServicesConsumerQuotaMetricsListViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type ServiceconsumermanagementServicesConsumerQuotaMetricsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServiceconsumermanagementServicesConsumerQuotaMetricsListRequest struct {
	PathParams  ServiceconsumermanagementServicesConsumerQuotaMetricsListPathParams
	QueryParams ServiceconsumermanagementServicesConsumerQuotaMetricsListQueryParams
	Security    ServiceconsumermanagementServicesConsumerQuotaMetricsListSecurity
}

type ServiceconsumermanagementServicesConsumerQuotaMetricsListResponse struct {
	ContentType                             string
	StatusCode                              int64
	V1Beta1ListConsumerQuotaMetricsResponse *shared.V1Beta1ListConsumerQuotaMetricsResponse
}
