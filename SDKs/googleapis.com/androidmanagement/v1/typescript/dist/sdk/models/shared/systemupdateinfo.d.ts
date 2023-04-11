import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of an update: whether an update exists and what type it is.
 */
export declare enum SystemUpdateInfoUpdateStatusEnum {
    UpdateStatusUnknown = "UPDATE_STATUS_UNKNOWN",
    UpToDate = "UP_TO_DATE",
    UnknownUpdateAvailable = "UNKNOWN_UPDATE_AVAILABLE",
    SecurityUpdateAvailable = "SECURITY_UPDATE_AVAILABLE",
    OsUpdateAvailable = "OS_UPDATE_AVAILABLE"
}
/**
 * Information about a potential pending system update.
 */
export declare class SystemUpdateInfo extends SpeakeasyBase {
    /**
     * The time when the update was first available. A zero value indicates that this field is not set. This field is set only if an update is available (that is, updateStatus is neither UPDATE_STATUS_UNKNOWN nor UP_TO_DATE).
     */
    updateReceivedTime?: string;
    /**
     * The status of an update: whether an update exists and what type it is.
     */
    updateStatus?: SystemUpdateInfoUpdateStatusEnum;
}
