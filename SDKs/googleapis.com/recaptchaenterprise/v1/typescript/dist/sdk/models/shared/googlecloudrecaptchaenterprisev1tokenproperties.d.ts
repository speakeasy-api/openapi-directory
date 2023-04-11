import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Reason associated with the response when valid = false.
 */
export declare enum GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum {
    InvalidReasonUnspecified = "INVALID_REASON_UNSPECIFIED",
    UnknownInvalidReason = "UNKNOWN_INVALID_REASON",
    Malformed = "MALFORMED",
    Expired = "EXPIRED",
    Dupe = "DUPE",
    Missing = "MISSING",
    BrowserError = "BROWSER_ERROR"
}
/**
 * Properties of the provided event token.
 */
export declare class GoogleCloudRecaptchaenterpriseV1TokenProperties extends SpeakeasyBase {
    /**
     * Action name provided at token generation.
     */
    action?: string;
    /**
     * The name of the Android package with which the token was generated (Android keys only).
     */
    androidPackageName?: string;
    /**
     * The timestamp corresponding to the generation of the token.
     */
    createTime?: string;
    /**
     * The hostname of the page on which the token was generated (Web keys only).
     */
    hostname?: string;
    /**
     * Reason associated with the response when valid = false.
     */
    invalidReason?: GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum;
    /**
     * The ID of the iOS bundle with which the token was generated (iOS keys only).
     */
    iosBundleId?: string;
    /**
     * Whether the provided user response token is valid. When valid = false, the reason could be specified in invalid_reason or it could also be due to a user failing to solve a challenge or a sitekey mismatch (i.e the sitekey used to generate the token was different than the one specified in the assessment).
     */
    valid?: boolean;
}
