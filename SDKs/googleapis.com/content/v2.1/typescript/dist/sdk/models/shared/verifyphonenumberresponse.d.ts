import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message for the VerifyPhoneNumber method.
 */
export declare class VerifyPhoneNumberResponse extends SpeakeasyBase {
    /**
     * Verified phone number if verification is successful. This phone number can only be replaced by another verified phone number.
     */
    verifiedPhoneNumber?: string;
}
