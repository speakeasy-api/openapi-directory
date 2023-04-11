import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines a policy of allowing every region by default and adding disallowed regions to a disallow list.
 */
export declare class GoogleCloudIdentitytoolkitAdminV2AllowByDefault extends SpeakeasyBase {
    /**
     * Two letter unicode region codes to disallow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json
     */
    disallowedRegions?: string[];
}
