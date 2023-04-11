import { SpeakeasyBase } from "../../../internal/utils";
import { Conversion } from "./conversion";
import { ConversionError } from "./conversionerror";
/**
 * The original conversion that was inserted or updated and whether there were any errors.
 */
export declare class ConversionStatus extends SpeakeasyBase {
    /**
     * A Conversion represents when a user successfully performs a desired action after seeing an ad.
     */
    conversion?: Conversion;
    /**
     * A list of errors related to this conversion.
     */
    errors?: ConversionError[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#conversionStatus".
     */
    kind?: string;
}
