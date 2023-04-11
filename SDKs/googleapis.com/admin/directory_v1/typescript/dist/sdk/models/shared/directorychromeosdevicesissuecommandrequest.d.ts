import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of command.
 */
export declare enum DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnum {
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
 * A request for issuing a command.
 */
export declare class DirectoryChromeosdevicesIssueCommandRequest extends SpeakeasyBase {
    /**
     * The type of command.
     */
    commandType?: DirectoryChromeosdevicesIssueCommandRequestCommandTypeEnum;
    /**
     * The payload for the command, provide it only if command supports it. The following commands support adding payload: * `SET_VOLUME`: Payload is a stringified JSON object in the form: { "volume": 50 }. The volume has to be an integer in the range [0,100]. * `DEVICE_START_CRD_SESSION`: Payload is optionally a stringified JSON object in the form: { "ackedUserPresence": true }. `ackedUserPresence` is a boolean. By default, `ackedUserPresence` is set to `false`. To start a Chrome Remote Desktop session for an active device, set `ackedUserPresence` to `true`.
     */
    payload?: string;
}
