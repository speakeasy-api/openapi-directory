import { SpeakeasyBase } from "../../../internal/utils";
import { Row } from "./row";
/**
 * Response message for TablesService.ListRows.
 */
export declare class ListRowsResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The rows from the specified table.
     */
    rows?: Row[];
}
