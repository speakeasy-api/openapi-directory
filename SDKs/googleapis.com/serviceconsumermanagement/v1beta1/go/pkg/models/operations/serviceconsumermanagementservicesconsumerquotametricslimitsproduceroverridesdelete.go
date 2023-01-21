package operations

import (
	"openapi/pkg/models/shared"
)

type ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeletePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteForceOnlyEnum string

const (
	ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteForceOnlyEnumQuotaSafetyCheckUnspecified    ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteForceOnlyEnum = "QUOTA_SAFETY_CHECK_UNSPECIFIED"
	ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteForceOnlyEnumLimitDecreaseBelowUsage        ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteForceOnlyEnum = "LIMIT_DECREASE_BELOW_USAGE"
	ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteForceOnlyEnumLimitDecreasePercentageTooHigh ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteForceOnlyEnum = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH"
)

type ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                                                                 `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                                                                           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                                                                   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                                                                           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                                                                           `queryParam:"style=form,explode=true,name=fields"`
	Force          *bool                                                                                             `queryParam:"style=form,explode=true,name=force"`
	ForceOnly      []ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteForceOnlyEnum `queryParam:"style=form,explode=true,name=forceOnly"`
	Key            *string                                                                                           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                                                                           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                                                                             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                                                                           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                                                                           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                                                                           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteRequest struct {
	PathParams  ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeletePathParams
	QueryParams ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteQueryParams
	Security    ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteSecurity
}

type ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesDeleteResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
