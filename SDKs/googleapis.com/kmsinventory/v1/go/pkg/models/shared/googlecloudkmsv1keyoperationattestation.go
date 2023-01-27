package shared

type GoogleCloudKmsV1KeyOperationAttestationFormatEnum string

const (
	GoogleCloudKmsV1KeyOperationAttestationFormatEnumAttestationFormatUnspecified GoogleCloudKmsV1KeyOperationAttestationFormatEnum = "ATTESTATION_FORMAT_UNSPECIFIED"
	GoogleCloudKmsV1KeyOperationAttestationFormatEnumCaviumV1Compressed           GoogleCloudKmsV1KeyOperationAttestationFormatEnum = "CAVIUM_V1_COMPRESSED"
	GoogleCloudKmsV1KeyOperationAttestationFormatEnumCaviumV2Compressed           GoogleCloudKmsV1KeyOperationAttestationFormatEnum = "CAVIUM_V2_COMPRESSED"
)

// GoogleCloudKmsV1KeyOperationAttestation
// Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key).
type GoogleCloudKmsV1KeyOperationAttestation struct {
	CertChains *GoogleCloudKmsV1KeyOperationAttestationCertificateChains `json:"certChains,omitempty"`
	Content    *string                                                   `json:"content,omitempty"`
	Format     *GoogleCloudKmsV1KeyOperationAttestationFormatEnum        `json:"format,omitempty"`
}
