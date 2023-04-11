import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Mute the specified UUID
 */
export declare enum UpdateCallRequestMuteActionEnum {
    Mute = "mute"
}
export declare class UpdateCallRequestMute extends SpeakeasyBase {
    /**
     * Mute the specified UUID
     */
    action?: UpdateCallRequestMuteActionEnum;
}
