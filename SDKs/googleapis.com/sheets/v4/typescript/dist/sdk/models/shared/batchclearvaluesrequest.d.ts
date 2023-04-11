import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The request for clearing more than one range of values in a spreadsheet.
 */
export declare class BatchClearValuesRequest extends SpeakeasyBase {
    /**
     * The ranges to clear, in [A1 notation or R1C1 notation](/sheets/api/guides/concepts#cell).
     */
    ranges?: string[];
}
