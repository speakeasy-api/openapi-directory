import { SpeakeasyBase } from "../../../internal/utils";
import { RegionV2 } from "./regionv2";
export declare class SupportedCountryV2 extends SpeakeasyBase {
    currencies?: string[];
    /**
     * Valid ISO 3166 2 character country code. See the <a href="https://www.iso.org/iso-3166-country-codes.html" target="_blank" a>ISO specification</a> for details.
     */
    isoCountryCode?: string;
    regions?: RegionV2[];
}
