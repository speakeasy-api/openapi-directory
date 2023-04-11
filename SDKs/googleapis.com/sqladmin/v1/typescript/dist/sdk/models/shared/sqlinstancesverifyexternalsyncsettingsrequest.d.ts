import { SpeakeasyBase } from "../../../internal/utils";
import { MySqlSyncConfig } from "./mysqlsyncconfig";
/**
 * External sync mode
 */
export declare enum SqlInstancesVerifyExternalSyncSettingsRequestSyncModeEnum {
    ExternalSyncModeUnspecified = "EXTERNAL_SYNC_MODE_UNSPECIFIED",
    Online = "ONLINE",
    Offline = "OFFLINE"
}
/**
 * Instance verify external sync settings request.
 */
export declare class SqlInstancesVerifyExternalSyncSettingsRequest extends SpeakeasyBase {
    /**
     * MySQL-specific external server sync settings.
     */
    mysqlSyncConfig?: MySqlSyncConfig;
    /**
     * External sync mode
     */
    syncMode?: SqlInstancesVerifyExternalSyncSettingsRequestSyncModeEnum;
    /**
     * Flag to enable verifying connection only
     */
    verifyConnectionOnly?: boolean;
    /**
     * Optional. Flag to verify settings required by replication setup only
     */
    verifyReplicationOnly?: boolean;
}
