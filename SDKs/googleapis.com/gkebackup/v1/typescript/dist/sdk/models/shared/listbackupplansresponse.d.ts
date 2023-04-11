import { SpeakeasyBase } from "../../../internal/utils";
import { BackupPlan } from "./backupplan";
/**
 * Response message for ListBackupPlans.
 */
export declare class ListBackupPlansResponse extends SpeakeasyBase {
    /**
     * The list of BackupPlans matching the given criteria.
     */
    backupPlans?: BackupPlan[];
    /**
     * A token which may be sent as page_token in a subsequent `ListBackupPlans` call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
