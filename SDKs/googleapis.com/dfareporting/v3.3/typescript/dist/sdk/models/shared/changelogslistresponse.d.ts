import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeLog } from "./changelog";
/**
 * Change Log List Response
 */
export declare class ChangeLogsListResponse extends SpeakeasyBase {
    /**
     * Change log collection.
     */
    changeLogs?: ChangeLog[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#changeLogsListResponse".
     */
    kind?: string;
    /**
     * Pagination token to be used for the next list operation.
     */
    nextPageToken?: string;
}
