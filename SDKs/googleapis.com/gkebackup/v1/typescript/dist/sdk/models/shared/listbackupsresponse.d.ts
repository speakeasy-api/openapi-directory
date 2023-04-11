import { SpeakeasyBase } from "../../../internal/utils";
import { Backup } from "./backup";
/**
 * Response message for ListBackups.
 */
export declare class ListBackupsResponse extends SpeakeasyBase {
    /**
     * The list of Backups matching the given criteria.
     */
    backups?: Backup[];
    /**
     * A token which may be sent as page_token in a subsequent `ListBackups` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return.
     */
    nextPageToken?: string;
}
