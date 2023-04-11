import { SpeakeasyBase } from "../../../internal/utils";
import { ExtendedValue } from "./extendedvalue";
/**
 * Metadata about a value in a pivot grouping.
 */
export declare class PivotGroupValueMetadata extends SpeakeasyBase {
    /**
     * True if the data corresponding to the value is collapsed.
     */
    collapsed?: boolean;
    /**
     * The kinds of value that a cell in a spreadsheet can have.
     */
    value?: ExtendedValue;
}
