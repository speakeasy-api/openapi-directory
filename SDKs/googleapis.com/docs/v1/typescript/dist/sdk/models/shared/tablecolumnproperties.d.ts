import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
/**
 * The width type of the column.
 */
export declare enum TableColumnPropertiesWidthTypeEnum {
    WidthTypeUnspecified = "WIDTH_TYPE_UNSPECIFIED",
    EvenlyDistributed = "EVENLY_DISTRIBUTED",
    FixedWidth = "FIXED_WIDTH"
}
/**
 * The properties of a column in a table.
 */
export declare class TableColumnProperties extends SpeakeasyBase {
    /**
     * A magnitude in a single direction in the specified units.
     */
    width?: Dimension;
    /**
     * The width type of the column.
     */
    widthType?: TableColumnPropertiesWidthTypeEnum;
}
