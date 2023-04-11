import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateChannelServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class CreateChannelSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateChannelCreateChannelRequest extends SpeakeasyBase {
    attributes?: string;
    createdBy?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    friendlyName?: string;
    type?: shared.ChannelEnumChannelTypeEnum;
    uniqueName?: string;
}
export declare class CreateChannelRequest extends SpeakeasyBase {
    requestBody?: CreateChannelCreateChannelRequest;
    serviceSid: string;
    /**
     * The X-Twilio-Webhook-Enabled HTTP request header
     */
    xTwilioWebhookEnabled?: shared.ChannelEnumWebhookEnabledTypeEnum;
}
export declare class CreateChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    ipMessagingV2ServiceChannel?: shared.IpMessagingV2ServiceChannel;
}
