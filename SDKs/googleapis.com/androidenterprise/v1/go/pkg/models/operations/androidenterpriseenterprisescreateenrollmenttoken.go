package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidenterpriseEnterprisesCreateEnrollmentTokenPathParams struct {
	EnterpriseID string `pathParam:"style=simple,explode=false,name=enterpriseId"`
}

type AndroidenterpriseEnterprisesCreateEnrollmentTokenDeviceTypeEnum string

const (
	AndroidenterpriseEnterprisesCreateEnrollmentTokenDeviceTypeEnumUnknown         AndroidenterpriseEnterprisesCreateEnrollmentTokenDeviceTypeEnum = "unknown"
	AndroidenterpriseEnterprisesCreateEnrollmentTokenDeviceTypeEnumDedicatedDevice AndroidenterpriseEnterprisesCreateEnrollmentTokenDeviceTypeEnum = "dedicatedDevice"
	AndroidenterpriseEnterprisesCreateEnrollmentTokenDeviceTypeEnumKnowledgeWorker AndroidenterpriseEnterprisesCreateEnrollmentTokenDeviceTypeEnum = "knowledgeWorker"
)

type AndroidenterpriseEnterprisesCreateEnrollmentTokenQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                                `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                                          `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                                  `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                                          `queryParam:"style=form,explode=true,name=callback"`
	DeviceType     *AndroidenterpriseEnterprisesCreateEnrollmentTokenDeviceTypeEnum `queryParam:"style=form,explode=true,name=deviceType"`
	Fields         *string                                                          `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                                          `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                                          `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                                            `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                                          `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                                          `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                                          `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AndroidenterpriseEnterprisesCreateEnrollmentTokenSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidenterpriseEnterprisesCreateEnrollmentTokenRequest struct {
	PathParams  AndroidenterpriseEnterprisesCreateEnrollmentTokenPathParams
	QueryParams AndroidenterpriseEnterprisesCreateEnrollmentTokenQueryParams
	Security    AndroidenterpriseEnterprisesCreateEnrollmentTokenSecurity
}

type AndroidenterpriseEnterprisesCreateEnrollmentTokenResponse struct {
	ContentType                   string
	CreateEnrollmentTokenResponse *shared.CreateEnrollmentTokenResponse
	StatusCode                    int64
}
