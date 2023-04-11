import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The result of the Attestation validation.
 */
export declare enum ValidateAttestationOccurrenceResponseResultEnum {
    ResultUnspecified = "RESULT_UNSPECIFIED",
    Verified = "VERIFIED",
    AttestationNotVerifiable = "ATTESTATION_NOT_VERIFIABLE"
}
/**
 * Response message for ValidationHelperV1.ValidateAttestationOccurrence.
 */
export declare class ValidateAttestationOccurrenceResponse extends SpeakeasyBase {
    /**
     * The reason for denial if the Attestation couldn't be validated.
     */
    denialReason?: string;
    /**
     * The result of the Attestation validation.
     */
    result?: ValidateAttestationOccurrenceResponseResultEnum;
}
