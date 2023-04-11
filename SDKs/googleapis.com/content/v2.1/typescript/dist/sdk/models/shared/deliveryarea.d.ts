import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryAreaPostalCodeRange } from "./deliveryareapostalcoderange";
/**
 * A delivery area for the product. Only one of `countryCode` or `postalCodeRange` must be set.
 */
export declare class DeliveryArea extends SpeakeasyBase {
    /**
     * Required. The country that the product can be delivered to. Submit a [unicode CLDR region](http://www.unicode.org/repos/cldr/tags/latest/common/main/en.xml) such as `US` or `CH`.
     */
    countryCode?: string;
    /**
     * A range of postal codes that defines the delivery area. Only set `firstPostalCode` when specifying a single postal code.
     */
    postalCodeRange?: DeliveryAreaPostalCodeRange;
    /**
     * A state, territory, or prefecture. This is supported for the United States, Australia, and Japan. Provide a subdivision code from the ISO 3166-2 code tables ([US](https://en.wikipedia.org/wiki/ISO_3166-2:US), [AU](https://en.wikipedia.org/wiki/ISO_3166-2:AU), or [JP](https://en.wikipedia.org/wiki/ISO_3166-2:JP)) without country prefix (for example, `"NY"`, `"NSW"`, `"03"`).
     */
    regionCode?: string;
}
