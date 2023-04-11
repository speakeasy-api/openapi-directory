import { SpeakeasyBase } from "../../../internal/utils";
import { PostalCodeRange } from "./postalcoderange";
export declare class PostalCodeGroup extends SpeakeasyBase {
    /**
     * The CLDR territory code of the country the postal code group applies to. Required.
     */
    country?: string;
    /**
     * The name of the postal code group, referred to in headers. Required.
     */
    name?: string;
    /**
     * A range of postal codes. Required.
     */
    postalCodeRanges?: PostalCodeRange[];
}
