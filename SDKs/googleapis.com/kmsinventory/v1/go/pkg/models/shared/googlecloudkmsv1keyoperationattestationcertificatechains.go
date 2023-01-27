package shared

// GoogleCloudKmsV1KeyOperationAttestationCertificateChains
// Certificate chains needed to verify the attestation. Certificates in chains are PEM-encoded and are ordered based on https://tools.ietf.org/html/rfc5246#section-7.4.2.
type GoogleCloudKmsV1KeyOperationAttestationCertificateChains struct {
	CaviumCerts          []string `json:"caviumCerts,omitempty"`
	GoogleCardCerts      []string `json:"googleCardCerts,omitempty"`
	GooglePartitionCerts []string `json:"googlePartitionCerts,omitempty"`
}
