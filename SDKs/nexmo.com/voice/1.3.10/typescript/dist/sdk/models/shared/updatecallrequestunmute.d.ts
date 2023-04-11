import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Unmute the specified UUID
 */
export declare enum UpdateCallRequestUnmuteActionEnum {
    Mute = "mute"
}
export declare class UpdateCallRequestUnmute extends SpeakeasyBase {
    /**
     * Unmute the specified UUID
     */
    action?: UpdateCallRequestUnmuteActionEnum;
}
