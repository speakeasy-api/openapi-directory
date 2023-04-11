import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines a policy of only allowing regions by explicitly adding them to an allowlist.
 */
export declare class GoogleCloudIdentitytoolkitAdminV2AllowlistOnly extends SpeakeasyBase {
    /**
     * Two letter unicode region codes to allow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json
     */
    allowedRegions?: string[];
}
