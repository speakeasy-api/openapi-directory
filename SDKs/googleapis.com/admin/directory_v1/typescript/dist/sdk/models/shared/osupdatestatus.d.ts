import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The update state of an OS update.
 */
export declare enum OsUpdateStatusStateEnum {
    UpdateStateUnspecified = "updateStateUnspecified",
    UpdateStateNotStarted = "updateStateNotStarted",
    UpdateStateDownloadInProgress = "updateStateDownloadInProgress",
    UpdateStateNeedReboot = "updateStateNeedReboot"
}
/**
 * Contains information regarding the current OS update status.
 */
export declare class OsUpdateStatus extends SpeakeasyBase {
    /**
     * Date and time of the last reboot.
     */
    rebootTime?: string;
    /**
     * The update state of an OS update.
     */
    state?: OsUpdateStatusStateEnum;
    /**
     * New required platform version from the pending updated kiosk app.
     */
    targetKioskAppVersion?: string;
    /**
     * New platform version of the OS image being downloaded and applied. It is only set when update status is UPDATE_STATUS_DOWNLOAD_IN_PROGRESS or UPDATE_STATUS_NEED_REBOOT. Note this could be a dummy "0.0.0.0" for UPDATE_STATUS_NEED_REBOOT for some edge cases, e.g. update engine is restarted without a reboot.
     */
    targetOsVersion?: string;
    /**
     * Date and time of the last update check.
     */
    updateCheckTime?: string;
    /**
     * Date and time of the last successful OS update.
     */
    updateTime?: string;
}
