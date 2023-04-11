import { SpeakeasyBase } from "../../../internal/utils";
import { AccountStatusItemLevelIssue } from "./accountstatusitemlevelissue";
import { AccountStatusStatistics } from "./accountstatusstatistics";
export declare class AccountStatusProducts extends SpeakeasyBase {
    /**
     * The channel the data applies to. Acceptable values are: - "`local`" - "`online`"
     */
    channel?: string;
    /**
     * The country the data applies to.
     */
    country?: string;
    /**
     * The destination the data applies to.
     */
    destination?: string;
    /**
     * List of item-level issues.
     */
    itemLevelIssues?: AccountStatusItemLevelIssue[];
    statistics?: AccountStatusStatistics;
}
