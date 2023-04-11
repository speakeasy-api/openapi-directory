import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A range of postal codes that defines the region area.
 */
export declare class RegionPostalCodeAreaPostalCodeRange extends SpeakeasyBase {
    /**
     * Required. A postal code or a pattern of the form prefix* denoting the inclusive lower bound of the range defining the area. Examples values: "94108", "9410*", "9*".
     */
    begin?: string;
    /**
     * Optional. A postal code or a pattern of the form prefix* denoting the inclusive upper bound of the range defining the area. It must have the same length as postalCodeRangeBegin: if postalCodeRangeBegin is a postal code then postalCodeRangeEnd must be a postal code too; if postalCodeRangeBegin is a pattern then postalCodeRangeEnd must be a pattern with the same prefix length. Optional: if not set, then the area is defined as being all the postal codes matching postalCodeRangeBegin.
     */
    end?: string;
}
