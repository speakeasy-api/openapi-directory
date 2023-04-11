import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Input for EMAIL verification.
 */
export declare class EmailInput extends SpeakeasyBase {
    /**
     * Email address where the PIN should be sent to. An email address is accepted only if it is one of the addresses provided by FetchVerificationOptions. If the EmailVerificationData has is_user_name_editable set to true, the client may specify a different user name (local-part) but must match the domain name.
     */
    emailAddress?: string;
}
