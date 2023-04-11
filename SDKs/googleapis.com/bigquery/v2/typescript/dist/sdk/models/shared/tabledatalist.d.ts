import { SpeakeasyBase } from "../../../internal/utils";
import { TableRow } from "./tablerow";
/**
 * Successful response
 */
export declare class TableDataList extends SpeakeasyBase {
    /**
     * A hash of this page of results.
     */
    etag?: string;
    /**
     * The resource type of the response.
     */
    kind?: string;
    /**
     * A token used for paging results. Providing this token instead of the startIndex parameter can help you retrieve stable results when an underlying table is changing.
     */
    pageToken?: string;
    /**
     * Rows of results.
     */
    rows?: TableRow[];
    /**
     * The total number of rows in the complete table.
     */
    totalRows?: string;
}
