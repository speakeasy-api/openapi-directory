import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Directory API allows you to view, generate, and invalidate backup verification codes for a user.
 */
export declare class VerificationCode extends SpeakeasyBase {
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * The type of the resource. This is always `admin#directory#verificationCode`.
     */
    kind?: string;
    /**
     * The obfuscated unique ID of the user.
     */
    userId?: string;
    /**
     * A current verification code for the user. Invalidated or used verification codes are not returned as part of the result.
     */
    verificationCode?: string;
}
