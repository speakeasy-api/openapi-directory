import { SpeakeasyBase } from "../../../internal/utils";
import { Table } from "./table";
/**
 * Response message for google.bigtable.admin.v2.BigtableTableAdmin.ListTables
 */
export declare class ListTablesResponse extends SpeakeasyBase {
    /**
     * Set if not all tables could be returned in a single response. Pass this value to `page_token` in another request to get the next page of results.
     */
    nextPageToken?: string;
    /**
     * The tables present in the requested instance.
     */
    tables?: Table[];
}
