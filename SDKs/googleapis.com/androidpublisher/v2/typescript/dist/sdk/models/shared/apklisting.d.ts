import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class ApkListing extends SpeakeasyBase {
    /**
     * The language code, in BCP 47 format (eg "en-US").
     */
    language?: string;
    /**
     * Describe what's new in your APK.
     */
    recentChanges?: string;
}
