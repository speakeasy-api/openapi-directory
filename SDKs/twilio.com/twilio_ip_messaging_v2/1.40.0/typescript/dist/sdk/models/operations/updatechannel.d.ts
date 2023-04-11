import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateChannelServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class UpdateChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateChannelUpdateChannelRequest extends SpeakeasyBase {
    attributes?: string;
    createdBy?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    friendlyName?: string;
    uniqueName?: string;
}
export declare class UpdateChannelRequest extends SpeakeasyBase {
    requestBody?: UpdateChannelUpdateChannelRequest;
    serviceSid: string;
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
    ipMessagingV2ServiceChannel?: shared.IpMessagingV2ServiceChannel;
}
