import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
/**
 * Updates the number of pinned table header rows in a table.
 */
export declare class PinTableHeaderRowsRequest extends SpeakeasyBase {
    /**
     * The number of table rows to pin, where 0 implies that all rows are unpinned.
     */
    pinnedHeaderRowsCount?: number;
    /**
     * A particular location in the document.
     */
    tableStartLocation?: Location;
}
