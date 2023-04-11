import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A saved column
 */
export declare class SavedColumn extends SpeakeasyBase {
    /**
     * Identifies this as a SavedColumn resource. Value: the fixed string doubleclicksearch#savedColumn.
     */
    kind?: string;
    /**
     * The name of the saved column.
     */
    savedColumnName?: string;
    /**
     * The type of data this saved column will produce.
     */
    type?: string;
}
