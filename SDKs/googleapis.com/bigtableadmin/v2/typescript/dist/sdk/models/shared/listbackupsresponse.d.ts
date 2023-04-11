import { SpeakeasyBase } from "../../../internal/utils";
import { Backup } from "./backup";
/**
 * The response for ListBackups.
 */
export declare class ListBackupsResponse extends SpeakeasyBase {
    /**
     * The list of matching backups.
     */
    backups?: Backup[];
    /**
     * `next_page_token` can be sent in a subsequent ListBackups call to fetch more of the matching backups.
     */
    nextPageToken?: string;
}
