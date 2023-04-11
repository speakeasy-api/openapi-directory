import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies parameters to Backup and DR to attach a BackupPlan to a compute instance for managed VM backup.
 */
export declare class ServiceIntegrationSpecBackupDRSpec extends SpeakeasyBase {
    /**
     * The BackupPlan resource to attach to the instance. Specified as a resource reference in instances, and regional instance templates, and as just the plan name in global instance templates
     */
    plan?: string;
}
