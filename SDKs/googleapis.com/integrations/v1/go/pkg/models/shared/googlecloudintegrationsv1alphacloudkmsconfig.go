package shared

// GoogleCloudIntegrationsV1alphaCloudKmsConfig
// Configuration information for Client's Cloud KMS information
type GoogleCloudIntegrationsV1alphaCloudKmsConfig struct {
	Key         *string `json:"key,omitempty"`
	KeyVersion  *string `json:"keyVersion,omitempty"`
	KmsLocation *string `json:"kmsLocation,omitempty"`
	KmsRing     *string `json:"kmsRing,omitempty"`
}
