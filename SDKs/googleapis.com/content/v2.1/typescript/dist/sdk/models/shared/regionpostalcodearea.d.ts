import { SpeakeasyBase } from "../../../internal/utils";
import { RegionPostalCodeAreaPostalCodeRange } from "./regionpostalcodeareapostalcoderange";
/**
 * A list of postal codes that defines the region area. Note: All regions defined using postal codes are accessible via the account's `ShippingSettings.postalCodeGroups` resource.
 */
export declare class RegionPostalCodeArea extends SpeakeasyBase {
    /**
     * Required. A range of postal codes.
     */
    postalCodes?: RegionPostalCodeAreaPostalCodeRange[];
    /**
     * Required. CLDR territory code or the country the postal code group applies to.
     */
    regionCode?: string;
}
