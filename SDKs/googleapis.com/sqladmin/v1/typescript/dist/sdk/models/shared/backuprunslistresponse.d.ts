import { SpeakeasyBase } from "../../../internal/utils";
import { BackupRun } from "./backuprun";
/**
 * Backup run list results.
 */
export declare class BackupRunsListResponse extends SpeakeasyBase {
    /**
     * A list of backup runs in reverse chronological order of the enqueued time.
     */
    items?: BackupRun[];
    /**
     * This is always `sql#backupRunsList`.
     */
    kind?: string;
    /**
     * The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.
     */
    nextPageToken?: string;
}
