import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The desired state of the Mute.
 */
export declare enum SetMuteRequestMuteEnum {
    MuteUnspecified = "MUTE_UNSPECIFIED",
    Muted = "MUTED",
    Unmuted = "UNMUTED",
    Undefined = "UNDEFINED"
}
/**
 * Request message for updating a finding's mute status.
 */
export declare class SetMuteRequest extends SpeakeasyBase {
    /**
     * Required. The desired state of the Mute.
     */
    mute?: SetMuteRequestMuteEnum;
}
