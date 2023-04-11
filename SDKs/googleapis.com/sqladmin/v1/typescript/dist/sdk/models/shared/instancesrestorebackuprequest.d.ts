import { SpeakeasyBase } from "../../../internal/utils";
import { RestoreBackupContext } from "./restorebackupcontext";
/**
 * Database instance restore backup request.
 */
export declare class InstancesRestoreBackupRequest extends SpeakeasyBase {
    /**
     * Database instance restore from backup context. Backup context contains source instance id and project id.
     */
    restoreBackupContext?: RestoreBackupContext;
}
