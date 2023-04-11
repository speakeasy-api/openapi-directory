import { SpeakeasyBase } from "../../../internal/utils";
import { Backup } from "./backup";
/**
 * Response message for DataprocMetastore.ListBackups.
 */
export declare class ListBackupsResponse extends SpeakeasyBase {
    /**
     * The backups of the specified service.
     */
    backups?: Backup[];
    /**
     * A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
