import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateChannelServerList: readonly ["https://chat.twilio.com"];
export declare class UpdateChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateChannelUpdateChannelRequest extends SpeakeasyBase {
    /**
     * The unique ID of the [Messaging Service](https://www.twilio.com/docs/sms/services/api) this channel belongs to.
     */
    messagingServiceSid?: string;
    type?: shared.ChannelEnumChannelTypeEnum;
}
export declare class UpdateChannelRequest extends SpeakeasyBase {
    requestBody?: UpdateChannelUpdateChannelRequest;
    /**
     * The unique SID identifier of the Service.
     */
    serviceSid: string;
    /**
     * A 34 character string that uniquely identifies this Channel.
     */
    sid: string;
    /**
     * The X-Twilio-Webhook-Enabled HTTP request header
     */
    xTwilioWebhookEnabled?: shared.ChannelEnumWebhookEnabledTypeEnum;
}
export declare class UpdateChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    chatV3Channel?: shared.ChatV3Channel;
}
