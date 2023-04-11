import { SpeakeasyBase } from "../../../internal/utils";
import { Conversion } from "./conversion";
/**
 * A list of conversions.
 */
export declare class ConversionList extends SpeakeasyBase {
    /**
     * The conversions being requested.
     */
    conversion?: Conversion[];
    /**
     * Identifies this as a ConversionList resource. Value: the fixed string doubleclicksearch#conversionList.
     */
    kind?: string;
}
