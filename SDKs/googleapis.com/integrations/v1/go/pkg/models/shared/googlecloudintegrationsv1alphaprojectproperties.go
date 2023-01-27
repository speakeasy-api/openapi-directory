package shared

type GoogleCloudIntegrationsV1alphaProjectPropertiesIPEnablementStateEnum string

const (
	GoogleCloudIntegrationsV1alphaProjectPropertiesIPEnablementStateEnumIPEnablementStateUnspecified    GoogleCloudIntegrationsV1alphaProjectPropertiesIPEnablementStateEnum = "IP_ENABLEMENT_STATE_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaProjectPropertiesIPEnablementStateEnumIPEnablementStateStandalone     GoogleCloudIntegrationsV1alphaProjectPropertiesIPEnablementStateEnum = "IP_ENABLEMENT_STATE_STANDALONE"
	GoogleCloudIntegrationsV1alphaProjectPropertiesIPEnablementStateEnumIPEnablementStateApigee         GoogleCloudIntegrationsV1alphaProjectPropertiesIPEnablementStateEnum = "IP_ENABLEMENT_STATE_APIGEE"
	GoogleCloudIntegrationsV1alphaProjectPropertiesIPEnablementStateEnumIPEnablementStateApigeeEntitled GoogleCloudIntegrationsV1alphaProjectPropertiesIPEnablementStateEnum = "IP_ENABLEMENT_STATE_APIGEE_ENTITLED"
)

// GoogleCloudIntegrationsV1alphaProjectProperties
// Metadata information for the given project
type GoogleCloudIntegrationsV1alphaProjectProperties struct {
	IPEnablementState  *GoogleCloudIntegrationsV1alphaProjectPropertiesIPEnablementStateEnum `json:"ipEnablementState,omitempty"`
	ProvisionedRegions []string                                                              `json:"provisionedRegions,omitempty"`
}
