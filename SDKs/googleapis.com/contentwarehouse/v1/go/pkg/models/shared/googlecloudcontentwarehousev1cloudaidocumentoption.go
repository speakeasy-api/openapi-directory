package shared

// GoogleCloudContentwarehouseV1CloudAiDocumentOption
// Request Option for processing Cloud AI Document in CW Document.
type GoogleCloudContentwarehouseV1CloudAiDocumentOption struct {
	CustomizedEntitiesPropertiesConversions map[string]string `json:"customizedEntitiesPropertiesConversions,omitempty"`
	EnableEntitiesConversions               *bool             `json:"enableEntitiesConversions,omitempty"`
}
