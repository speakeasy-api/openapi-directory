import { SpeakeasyBase } from "../../../internal/utils";
import { MySqlSyncConfig } from "./mysqlsyncconfig";
/**
 * External sync mode.
 */
export declare enum SqlInstancesStartExternalSyncRequestSyncModeEnum {
    ExternalSyncModeUnspecified = "EXTERNAL_SYNC_MODE_UNSPECIFIED",
    Online = "ONLINE",
    Offline = "OFFLINE"
}
/**
 * Instance start external sync request.
 */
export declare class SqlInstancesStartExternalSyncRequest extends SpeakeasyBase {
    /**
     * MySQL-specific external server sync settings.
     */
    mysqlSyncConfig?: MySqlSyncConfig;
    /**
     * Whether to skip the verification step (VESS).
     */
    skipVerification?: boolean;
    /**
     * External sync mode.
     */
    syncMode?: SqlInstancesStartExternalSyncRequestSyncModeEnum;
}
