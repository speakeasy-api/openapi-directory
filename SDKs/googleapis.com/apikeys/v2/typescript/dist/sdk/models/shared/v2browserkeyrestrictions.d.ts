import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The HTTP referrers (websites) that are allowed to use the key.
 */
export declare class V2BrowserKeyRestrictions extends SpeakeasyBase {
    /**
     * A list of regular expressions for the referrer URLs that are allowed to make API calls with this key.
     */
    allowedReferrers?: string[];
}
