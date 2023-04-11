import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssuredworkloadsV1ViolationRemediation } from "./googlecloudassuredworkloadsv1violationremediation";
/**
 * Output only. State of the violation
 */
export declare enum GoogleCloudAssuredworkloadsV1ViolationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Resolved = "RESOLVED",
    Unresolved = "UNRESOLVED",
    Exception = "EXCEPTION"
}
/**
 * Workload monitoring Violation. Next Id: 22
 */
export declare class GoogleCloudAssuredworkloadsV1Violation extends SpeakeasyBase {
    /**
     * A boolean that indicates if the violation is acknowledged
     */
    acknowledged?: boolean;
    /**
     * Optional. Timestamp when this violation was acknowledged last. This will be absent when acknowledged field is marked as false.
     */
    acknowledgementTime?: string;
    /**
     * Output only. Immutable. Audit Log Link for violated resource Format: https://console.cloud.google.com/logs/query;query={logName}{protoPayload.resourceName}{timeRange}{folder}
     */
    auditLogLink?: string;
    /**
     * Output only. Time of the event which triggered the Violation.
     */
    beginTime?: string;
    /**
     * Output only. Category under which this violation is mapped. e.g. Location, Service Usage, Access, Encryption, etc.
     */
    category?: string;
    /**
     * Output only. Description for the Violation. e.g. OrgPolicy gcp.resourceLocations has non compliant value.
     */
    description?: string;
    /**
     * Output only. Immutable. Audit Log link to find business justification provided for violation exception. Format: https://console.cloud.google.com/logs/query;query={logName}{protoPayload.resourceName}{protoPayload.methodName}{timeRange}{organization}
     */
    exceptionAuditLogLink?: string;
    /**
     * Output only. Immutable. Name of the Violation. Format: organizations/{organization}/locations/{location}/workloads/{workload_id}/violations/{violations_id}
     */
    name?: string;
    /**
     * Output only. Immutable. Name of the OrgPolicy which was modified with non-compliant change and resulted this violation. Format: projects/{project_number}/policies/{constraint_name} folders/{folder_id}/policies/{constraint_name} organizations/{organization_id}/policies/{constraint_name}
     */
    nonCompliantOrgPolicy?: string;
    /**
     * Output only. Immutable. The org-policy-constraint that was incorrectly changed, which resulted in this violation.
     */
    orgPolicyConstraint?: string;
    /**
     * Represents remediation guidance to resolve compliance violation for AssuredWorkload
     */
    remediation?: GoogleCloudAssuredworkloadsV1ViolationRemediation;
    /**
     * Output only. Time of the event which fixed the Violation. If the violation is ACTIVE this will be empty.
     */
    resolveTime?: string;
    /**
     * Output only. State of the violation
     */
    state?: GoogleCloudAssuredworkloadsV1ViolationStateEnum;
    /**
     * Output only. The last time when the Violation record was updated.
     */
    updateTime?: string;
}
