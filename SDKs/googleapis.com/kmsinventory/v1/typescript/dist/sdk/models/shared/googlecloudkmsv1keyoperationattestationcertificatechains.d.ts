import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Certificate chains needed to verify the attestation. Certificates in chains are PEM-encoded and are ordered based on https://tools.ietf.org/html/rfc5246#section-7.4.2.
 */
export declare class GoogleCloudKmsV1KeyOperationAttestationCertificateChains extends SpeakeasyBase {
    /**
     * Cavium certificate chain corresponding to the attestation.
     */
    caviumCerts?: string[];
    /**
     * Google card certificate chain corresponding to the attestation.
     */
    googleCardCerts?: string[];
    /**
     * Google partition certificate chain corresponding to the attestation.
     */
    googlePartitionCerts?: string[];
}
