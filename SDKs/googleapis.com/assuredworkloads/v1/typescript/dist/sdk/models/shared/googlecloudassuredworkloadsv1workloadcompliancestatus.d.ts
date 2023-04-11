import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the Compliance Status of this workload
 */
export declare class GoogleCloudAssuredworkloadsV1WorkloadComplianceStatus extends SpeakeasyBase {
    /**
     * Count of active Violations which are acknowledged in the Workload.
     */
    acknowledgedViolationCount?: number;
    /**
     * Count of active Violations which haven't been acknowledged.
     */
    activeViolationCount?: number;
}
