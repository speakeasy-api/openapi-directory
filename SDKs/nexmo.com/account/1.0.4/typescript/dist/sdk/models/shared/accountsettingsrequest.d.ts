import { SpeakeasyBase } from "../../../internal/utils";
export declare class AccountSettingsRequest extends SpeakeasyBase {
    /**
     * The webhook URL that Vonage makes a request to when a delivery receipt is available  for an SMS sent by one of your Vonage numbers.
     *
     * @remarks
     * Send an empty string to unset this value.
     */
    drCallBackUrl?: string;
    /**
     * The default webhook URL for inbound SMS. If an SMS is received at a Vonage number  that does not have its own inbound SMS webhook configured, Vonage makes a request here.
     *
     * @remarks
     * Send an empty string to unset this value.
     */
    moCallBackUrl?: string;
}
