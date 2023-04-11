import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the author of the review.
 */
export declare class Reviewer extends SpeakeasyBase {
    /**
     * The name of the reviewer. Only populated with the reviewer's real name if `is_anonymous` is false.
     */
    displayName?: string;
    /**
     * Indicates whether the reviewer has opted to remain anonymous.
     */
    isAnonymous?: boolean;
    /**
     * The profile photo link of the reviewer. Only populated if `is_anonymous` is false.
     */
    profilePhotoUrl?: string;
}
