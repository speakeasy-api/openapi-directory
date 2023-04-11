import { SpeakeasyBase } from "../../../internal/utils";
import { PostalCode } from "./postalcode";
/**
 * Postal Code List Response
 */
export declare class PostalCodesListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#postalCodesListResponse".
     */
    kind?: string;
    /**
     * Postal code collection.
     */
    postalCodes?: PostalCode[];
}
