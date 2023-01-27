package shared

type GoogleCloudIntegrationsV1alphaClientConfigBillingTypeEnum string

const (
	GoogleCloudIntegrationsV1alphaClientConfigBillingTypeEnumBillingTypeUnspecified        GoogleCloudIntegrationsV1alphaClientConfigBillingTypeEnum = "BILLING_TYPE_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaClientConfigBillingTypeEnumBillingTypeApigeeTrials       GoogleCloudIntegrationsV1alphaClientConfigBillingTypeEnum = "BILLING_TYPE_APIGEE_TRIALS"
	GoogleCloudIntegrationsV1alphaClientConfigBillingTypeEnumBillingTypeApigeeSubscription GoogleCloudIntegrationsV1alphaClientConfigBillingTypeEnum = "BILLING_TYPE_APIGEE_SUBSCRIPTION"
	GoogleCloudIntegrationsV1alphaClientConfigBillingTypeEnumBillingTypePayg               GoogleCloudIntegrationsV1alphaClientConfigBillingTypeEnum = "BILLING_TYPE_PAYG"
)

type GoogleCloudIntegrationsV1alphaClientConfigClientStateEnum string

const (
	GoogleCloudIntegrationsV1alphaClientConfigClientStateEnumClientStateUnspecified GoogleCloudIntegrationsV1alphaClientConfigClientStateEnum = "CLIENT_STATE_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaClientConfigClientStateEnumClientStateActive      GoogleCloudIntegrationsV1alphaClientConfigClientStateEnum = "CLIENT_STATE_ACTIVE"
	GoogleCloudIntegrationsV1alphaClientConfigClientStateEnumClientStateDisabled    GoogleCloudIntegrationsV1alphaClientConfigClientStateEnum = "CLIENT_STATE_DISABLED"
)

// GoogleCloudIntegrationsV1alphaClientConfig
// The configuration information for the Client
type GoogleCloudIntegrationsV1alphaClientConfig struct {
	BillingType        *GoogleCloudIntegrationsV1alphaClientConfigBillingTypeEnum `json:"billingType,omitempty"`
	ClientState        *GoogleCloudIntegrationsV1alphaClientConfigClientStateEnum `json:"clientState,omitempty"`
	CloudKmsConfig     *GoogleCloudIntegrationsV1alphaCloudKmsConfig              `json:"cloudKmsConfig,omitempty"`
	CloudLoggingConfig *GoogleCloudIntegrationsV1alphaCloudLoggingConfig          `json:"cloudLoggingConfig,omitempty"`
	CreateTime         *string                                                    `json:"createTime,omitempty"`
	Description        *string                                                    `json:"description,omitempty"`
	ID                 *string                                                    `json:"id,omitempty"`
	P4ServiceAccount   *string                                                    `json:"p4ServiceAccount,omitempty"`
	ProjectID          *string                                                    `json:"projectId,omitempty"`
	Region             *string                                                    `json:"region,omitempty"`
}
