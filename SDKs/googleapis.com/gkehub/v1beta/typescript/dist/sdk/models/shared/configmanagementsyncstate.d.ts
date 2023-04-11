import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementSyncError } from "./configmanagementsyncerror";
/**
 * Sync status code
 */
export declare enum ConfigManagementSyncStateCodeEnum {
    SyncCodeUnspecified = "SYNC_CODE_UNSPECIFIED",
    Synced = "SYNCED",
    Pending = "PENDING",
    Error = "ERROR",
    NotConfigured = "NOT_CONFIGURED",
    NotInstalled = "NOT_INSTALLED",
    Unauthorized = "UNAUTHORIZED",
    Unreachable = "UNREACHABLE"
}
/**
 * State indicating an ACM's progress syncing configurations to a cluster
 */
export declare class ConfigManagementSyncState extends SpeakeasyBase {
    /**
     * Sync status code
     */
    code?: ConfigManagementSyncStateCodeEnum;
    /**
     * A list of errors resulting from problematic configs. This list will be truncated after 100 errors, although it is unlikely for that many errors to simultaneously exist.
     */
    errors?: ConfigManagementSyncError[];
    /**
     * Token indicating the state of the importer.
     */
    importToken?: string;
    /**
     * Deprecated: use last_sync_time instead. Timestamp of when ACM last successfully synced the repo The time format is specified in https://golang.org/pkg/time/#Time.String
     */
    lastSync?: string;
    /**
     * Timestamp type of when ACM last successfully synced the repo
     */
    lastSyncTime?: string;
    /**
     * Token indicating the state of the repo.
     */
    sourceToken?: string;
    /**
     * Token indicating the state of the syncer.
     */
    syncToken?: string;
}
