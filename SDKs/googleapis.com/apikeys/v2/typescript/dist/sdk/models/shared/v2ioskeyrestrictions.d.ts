import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The iOS apps that are allowed to use the key.
 */
export declare class V2IosKeyRestrictions extends SpeakeasyBase {
    /**
     * A list of bundle IDs that are allowed when making API calls with this key.
     */
    allowedBundleIds?: string[];
}
