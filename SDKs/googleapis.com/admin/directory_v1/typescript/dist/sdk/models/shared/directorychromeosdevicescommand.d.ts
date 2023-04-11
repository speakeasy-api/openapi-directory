import { SpeakeasyBase } from "../../../internal/utils";
import { DirectoryChromeosdevicesCommandResult } from "./directorychromeosdevicescommandresult";
/**
 * Indicates the command state.
 */
export declare enum DirectoryChromeosdevicesCommandStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Expired = "EXPIRED",
    Cancelled = "CANCELLED",
    SentToClient = "SENT_TO_CLIENT",
    AckedByClient = "ACKED_BY_CLIENT",
    ExecutedByClient = "EXECUTED_BY_CLIENT"
}
/**
 * The type of the command.
 */
export declare enum DirectoryChromeosdevicesCommandTypeEnum {
    CommandTypeUnspecified = "COMMAND_TYPE_UNSPECIFIED",
    Reboot = "REBOOT",
    TakeAScreenshot = "TAKE_A_SCREENSHOT",
    SetVolume = "SET_VOLUME",
    WipeUsers = "WIPE_USERS",
    RemotePowerwash = "REMOTE_POWERWASH",
    DeviceStartCrdSession = "DEVICE_START_CRD_SESSION",
    CaptureLogs = "CAPTURE_LOGS"
}
/**
 * Information regarding a command that was issued to a device.
 */
export declare class DirectoryChromeosdevicesCommand extends SpeakeasyBase {
    /**
     * The time at which the command will expire. If the device doesn't execute the command within this time the command will become expired.
     */
    commandExpireTime?: string;
    /**
     * Unique ID of a device command.
     */
    commandId?: string;
    /**
     * The result of executing a command.
     */
    commandResult?: DirectoryChromeosdevicesCommandResult;
    /**
     * The timestamp when the command was issued by the admin.
     */
    issueTime?: string;
    /**
     * The payload that the command specified, if any.
     */
    payload?: string;
    /**
     * Indicates the command state.
     */
    state?: DirectoryChromeosdevicesCommandStateEnum;
    /**
     * The type of the command.
     */
    type?: DirectoryChromeosdevicesCommandTypeEnum;
}
