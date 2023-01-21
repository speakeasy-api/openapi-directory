package operations

import (
	"openapi/pkg/models/shared"
)

type ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchForceOnlyEnum string

const (
	ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchForceOnlyEnumQuotaSafetyCheckUnspecified    ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchForceOnlyEnum = "QUOTA_SAFETY_CHECK_UNSPECIFIED"
	ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchForceOnlyEnumLimitDecreaseBelowUsage        ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchForceOnlyEnum = "LIMIT_DECREASE_BELOW_USAGE"
	ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchForceOnlyEnumLimitDecreasePercentageTooHigh ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchForceOnlyEnum = "LIMIT_DECREASE_PERCENTAGE_TOO_HIGH"
)

type ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                                                                `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                                                                          `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                                                                  `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                                                                          `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                                                                          `queryParam:"style=form,explode=true,name=fields"`
	Force          *bool                                                                                            `queryParam:"style=form,explode=true,name=force"`
	ForceOnly      []ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchForceOnlyEnum `queryParam:"style=form,explode=true,name=forceOnly"`
	Key            *string                                                                                          `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                                                                          `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                                                                            `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                                                                          `queryParam:"style=form,explode=true,name=quotaUser"`
	UpdateMask     *string                                                                                          `queryParam:"style=form,explode=true,name=updateMask"`
	UploadType     *string                                                                                          `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                                                                          `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchRequest struct {
	PathParams  ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchPathParams
	QueryParams ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchQueryParams
	Request     *shared.V1Beta1QuotaOverride `request:"mediaType=application/json"`
	Security    ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchSecurity
}

type ServiceconsumermanagementServicesConsumerQuotaMetricsLimitsProducerOverridesPatchResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}
