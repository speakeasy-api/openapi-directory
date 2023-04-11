import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceStatusServiceIntegrationStatusBackupDRStatus } from "./resourcestatusserviceintegrationstatusbackupdrstatus";
/**
 * Represents the status of integration between instance and another service. See go/gce-backupdr-design for more details.
 */
export declare class ResourceStatusServiceIntegrationStatus extends SpeakeasyBase {
    /**
     * Message defining compute perspective of the result of integration with Backup and DR. FAILED status indicates that the operation specified did not complete correctly and should be retried with the same value.
     */
    backupDr?: ResourceStatusServiceIntegrationStatusBackupDRStatus;
}
