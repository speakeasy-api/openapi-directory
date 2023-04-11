import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
/**
 * Styles that apply to a table row.
 */
export declare class TableRowStyle extends SpeakeasyBase {
    /**
     * A magnitude in a single direction in the specified units.
     */
    minRowHeight?: Dimension;
    /**
     * Whether the row cannot overflow across page or column boundaries.
     */
    preventOverflow?: boolean;
    /**
     * Whether the row is a table header.
     */
    tableHeader?: boolean;
}
