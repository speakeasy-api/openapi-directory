import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for Verifications.CompleteVerificationAction.
 */
export declare class CompleteVerificationRequest extends SpeakeasyBase {
    /**
     * PIN code received by the merchant to complete the verification.
     */
    pin?: string;
}
