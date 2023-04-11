import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Permissions granted to the AW Partner SA account for the customer workload
 */
export declare class GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions extends SpeakeasyBase {
    /**
     * Allow the partner to view inspectability logs and monitoring violations.
     */
    dataLogsViewer?: boolean;
    /**
     * Allow partner to monitor folder and remediate violations
     */
    remediateFolderViolations?: boolean;
    /**
     * Allow partner to approve or reject Service Access requests
     */
    serviceAccessApprover?: boolean;
}
