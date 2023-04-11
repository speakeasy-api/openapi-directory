import { SpeakeasyBase } from "../../../internal/utils";
export declare class CheckRequest extends SpeakeasyBase {
    /**
     * You can find your API key in your [account dashboard](https://dashboard.nexmo.com)
     */
    apiKey: string;
    /**
     * You can find your API secret in your [account dashboard](https://dashboard.nexmo.com)
     */
    apiSecret: string;
    /**
     * The verification code entered by your user.
     */
    code: string;
    /**
     * (This field is no longer used)
     */
    ipAddress?: string;
    /**
     * The Verify request to check. This is the `request_id` you received in the response to the Verify request.
     */
    requestId: string;
}
