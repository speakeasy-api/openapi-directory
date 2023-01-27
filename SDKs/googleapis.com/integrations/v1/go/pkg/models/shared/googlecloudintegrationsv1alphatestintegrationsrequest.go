package shared

// GoogleCloudIntegrationsV1alphaTestIntegrationsRequestInput
// The request for testing an integration.
type GoogleCloudIntegrationsV1alphaTestIntegrationsRequestInput struct {
	ClientID            *string                                                `json:"clientId,omitempty"`
	DeadlineSecondsTime *string                                                `json:"deadlineSecondsTime,omitempty"`
	InputParameters     map[string]GoogleCloudIntegrationsV1alphaValueType     `json:"inputParameters,omitempty"`
	IntegrationVersion  *GoogleCloudIntegrationsV1alphaIntegrationVersionInput `json:"integrationVersion,omitempty"`
	Parameters          *EnterpriseCrmFrontendsEventbusProtoEventParameters    `json:"parameters,omitempty"`
	TestMode            *bool                                                  `json:"testMode,omitempty"`
	TriggerID           *string                                                `json:"triggerId,omitempty"`
}
