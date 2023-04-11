import { SpeakeasyBase } from "../../../internal/utils";
/**
 * End the call for the specified UUID
 */
export declare enum UpdateCallRequestHangupActionEnum {
    Hangup = "hangup"
}
export declare class UpdateCallRequestHangup extends SpeakeasyBase {
    /**
     * End the call for the specified UUID
     */
    action?: UpdateCallRequestHangupActionEnum;
}
