import { SpeakeasyBase } from "../../../internal/utils";
import { InvitedVendorsByLanguage } from "./invitedvendorsbylanguage";
/**
 * Project Completion Report
 */
export declare class ProjectCompletionReport extends SpeakeasyBase {
    /**
     * Assigned admin's user id
     */
    adminUserId?: number;
    completionReportData?: InvitedVendorsByLanguage[];
    /**
     * internal id of the project
     */
    id?: number;
    /**
     * quote id of the project
     */
    quoteId?: number;
}
