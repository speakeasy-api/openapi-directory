import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateChains } from "./certificatechains";
/**
 * Output only. The format of the attestation data.
 */
export declare enum KeyOperationAttestationFormatEnum {
    AttestationFormatUnspecified = "ATTESTATION_FORMAT_UNSPECIFIED",
    CaviumV1Compressed = "CAVIUM_V1_COMPRESSED",
    CaviumV2Compressed = "CAVIUM_V2_COMPRESSED"
}
/**
 * Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key).
 */
export declare class KeyOperationAttestation extends SpeakeasyBase {
    /**
     * Certificate chains needed to verify the attestation. Certificates in chains are PEM-encoded and are ordered based on https://tools.ietf.org/html/rfc5246#section-7.4.2.
     */
    certChains?: CertificateChains;
    /**
     * Output only. The attestation data provided by the HSM when the key operation was performed.
     */
    content?: string;
    /**
     * Output only. The format of the attestation data.
     */
    format?: KeyOperationAttestationFormatEnum;
}
/**
 * Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key).
 */
export declare class KeyOperationAttestationInput extends SpeakeasyBase {
    /**
     * Certificate chains needed to verify the attestation. Certificates in chains are PEM-encoded and are ordered based on https://tools.ietf.org/html/rfc5246#section-7.4.2.
     */
    certChains?: CertificateChains;
}
