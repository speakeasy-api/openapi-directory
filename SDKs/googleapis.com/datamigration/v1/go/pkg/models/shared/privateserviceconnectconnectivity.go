package shared

// PrivateServiceConnectConnectivity
// Private Service Connect connectivity (https://cloud.google.com/vpc/docs/private-service-connect#benefits-services)
type PrivateServiceConnectConnectivity struct {
	ServiceAttachment *string `json:"serviceAttachment,omitempty"`
}
