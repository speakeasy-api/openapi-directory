import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceIntegrationSpecBackupDRSpec } from "./serviceintegrationspecbackupdrspec";
/**
 * Specifies the parameters to configure an integration with instances.
 */
export declare class ServiceIntegrationSpec extends SpeakeasyBase {
    /**
     * Specifies parameters to Backup and DR to attach a BackupPlan to a compute instance for managed VM backup.
     */
    backupDr?: ServiceIntegrationSpecBackupDRSpec;
}
