package shared

// GoogleCloudIntegrationsV1alphaTestIntegrationsResponse
// The response for testing an integration.
type GoogleCloudIntegrationsV1alphaTestIntegrationsResponse struct {
	EventParameters  *EnterpriseCrmFrontendsEventbusProtoEventParameters `json:"eventParameters,omitempty"`
	ExecutionFailed  *bool                                               `json:"executionFailed,omitempty"`
	ExecutionID      *string                                             `json:"executionId,omitempty"`
	ParameterEntries []EnterpriseCrmFrontendsEventbusProtoParameterEntry `json:"parameterEntries,omitempty"`
	Parameters       map[string]GoogleCloudIntegrationsV1alphaValueType  `json:"parameters,omitempty"`
}
