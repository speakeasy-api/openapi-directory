import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Enum representing the registration state of a Backup and DR backup plan for the instance.
 */
export declare enum ResourceStatusServiceIntegrationStatusBackupDRStatusStateEnum {
    Active = "ACTIVE",
    Creating = "CREATING",
    Deleting = "DELETING",
    Failed = "FAILED",
    StateUnspecified = "STATE_UNSPECIFIED"
}
/**
 * Message defining compute perspective of the result of integration with Backup and DR. FAILED status indicates that the operation specified did not complete correctly and should be retried with the same value.
 */
export declare class ResourceStatusServiceIntegrationStatusBackupDRStatus extends SpeakeasyBase {
    /**
     * The PlanReference object created by Backup and DR to maintain the actual status of backups. May still be present if removing the backup plan fails.
     */
    integrationDetails?: string;
    /**
     * Enum representing the registration state of a Backup and DR backup plan for the instance.
     */
    state?: ResourceStatusServiceIntegrationStatusBackupDRStatusStateEnum;
}
