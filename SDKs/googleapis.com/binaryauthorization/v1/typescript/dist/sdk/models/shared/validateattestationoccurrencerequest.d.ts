import { SpeakeasyBase } from "../../../internal/utils";
import { AttestationOccurrence } from "./attestationoccurrence";
/**
 * Request message for ValidationHelperV1.ValidateAttestationOccurrence.
 */
export declare class ValidateAttestationOccurrenceRequest extends SpeakeasyBase {
    /**
     * Occurrence that represents a single "attestation". The authenticity of an attestation can be verified using the attached signature. If the verifier trusts the public key of the signer, then verifying the signature is sufficient to establish trust. In this circumstance, the authority to which this attestation is attached is primarily useful for lookup (how to find this attestation if you already know the authority and artifact to be verified) and intent (for which authority this attestation was intended to sign.
     */
    attestation?: AttestationOccurrence;
    /**
     * Required. The resource name of the Note to which the containing Occurrence is associated.
     */
    occurrenceNote?: string;
    /**
     * Required. The URI of the artifact (e.g. container image) that is the subject of the containing Occurrence.
     */
    occurrenceResourceUri?: string;
}
