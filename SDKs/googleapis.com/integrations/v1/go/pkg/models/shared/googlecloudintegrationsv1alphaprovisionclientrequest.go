package shared

// GoogleCloudIntegrationsV1alphaProvisionClientRequest
// Request for the Provision rpc
type GoogleCloudIntegrationsV1alphaProvisionClientRequest struct {
	CloudKmsConfig        *GoogleCloudIntegrationsV1alphaCloudKmsConfig `json:"cloudKmsConfig,omitempty"`
	CreateSampleWorkflows *bool                                         `json:"createSampleWorkflows,omitempty"`
}
