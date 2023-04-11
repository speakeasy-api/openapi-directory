import { SpeakeasyBase } from "../../../internal/utils";
import { VerificationCode } from "./verificationcode";
/**
 * JSON response template for list verification codes operation in Directory API.
 */
export declare class VerificationCodes extends SpeakeasyBase {
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * A list of verification code resources.
     */
    items?: VerificationCode[];
    /**
     * The type of the resource. This is always `admin#directory#verificationCodesList`.
     */
    kind?: string;
}
