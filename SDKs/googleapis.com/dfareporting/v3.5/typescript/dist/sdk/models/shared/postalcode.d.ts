import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about a postal code that can be targeted by ads.
 */
export declare class PostalCode extends SpeakeasyBase {
    /**
     * Postal code. This is equivalent to the id field.
     */
    code?: string;
    /**
     * Country code of the country to which this postal code belongs.
     */
    countryCode?: string;
    /**
     * DART ID of the country to which this postal code belongs.
     */
    countryDartId?: string;
    /**
     * ID of this postal code.
     */
    id?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#postalCode".
     */
    kind?: string;
}
