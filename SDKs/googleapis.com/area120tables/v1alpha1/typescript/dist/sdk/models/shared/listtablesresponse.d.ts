import { SpeakeasyBase } from "../../../internal/utils";
import { Table } from "./table";
/**
 * Response message for TablesService.ListTables.
 */
export declare class ListTablesResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is empty, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The list of tables.
     */
    tables?: Table[];
}
