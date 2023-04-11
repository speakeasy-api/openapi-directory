import { SpeakeasyBase } from "../../../internal/utils";
import { OSPolicyAssignmentReport } from "./ospolicyassignmentreport";
/**
 * A response message for listing OS Policy assignment reports including the page of results and page token.
 */
export declare class ListOSPolicyAssignmentReportsResponse extends SpeakeasyBase {
    /**
     * The pagination token to retrieve the next page of OS policy assignment report objects.
     */
    nextPageToken?: string;
    /**
     * List of OS policy assignment reports.
     */
    osPolicyAssignmentReports?: OSPolicyAssignmentReport[];
}
