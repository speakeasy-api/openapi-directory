import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The possible commands are `cancel` to request cancellation of the verification process, or `trigger_next_event` to advance  to the next verification event (if any). Cancellation is only possible 30 seconds after the start of the verification request and before the second event (either TTS or SMS) has taken place.
 */
export declare enum ControlRequestCmdEnum {
    Cancel = "cancel",
    TriggerNextEvent = "trigger_next_event"
}
export declare class ControlRequest extends SpeakeasyBase {
    /**
     * You can find your API key in your [account dashboard](https://dashboard.nexmo.com)
     */
    apiKey: string;
    /**
     * You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)
     */
    apiSecret: string;
    /**
     * The possible commands are `cancel` to request cancellation of the verification process, or `trigger_next_event` to advance  to the next verification event (if any). Cancellation is only possible 30 seconds after the start of the verification request and before the second event (either TTS or SMS) has taken place.
     */
    cmd: ControlRequestCmdEnum;
    /**
     * The `request_id` you received in the response to the Verify request.
     */
    requestId: string;
}
