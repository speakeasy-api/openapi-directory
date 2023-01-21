package operations

import (
	"openapi/pkg/models/shared"
)

type ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateForceOnlyEnum string

const (
	ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateForceOnlyEnumQuotaSafetyCheckUnspecified    ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateForceOnlyEnum = "QUOTA_SAFETY_CHECK_UNSPECIFIED"
	ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateForceOnlyEnumLimitDecreaseBelowUsage        ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateForceOnlyEnum = "LIMIT_DECREASE_BELOW_USAGE"
	ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateForceOnlyEnumLimitDecreasePercentageTooHigh ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateForceOnlyEnum = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH"
)

type ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                                                                 `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                                                                           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                                                                   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                                                                           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                                                                           `queryParam:"style=form,explode=true,name=fields"`
	Force          *bool                                                                                             `queryParam:"style=form,explode=true,name=force"`
	ForceOnly      []ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateForceOnlyEnum `queryParam:"style=form,explode=true,name=forceOnly"`
	Key            *string                                                                                           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                                                                           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                                                                             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                                                                           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                                                                           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                                                                           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateRequest struct {
	PathParams  ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreatePathParams
	QueryParams ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateQueryParams
	Request     *shared.V1Beta1QuotaOverride `request:"mediaType=application/json"`
	Security    ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateSecurity
}

type ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesCreateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
