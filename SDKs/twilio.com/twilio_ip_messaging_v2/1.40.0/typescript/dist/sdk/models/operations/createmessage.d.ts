import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateMessageServerList: readonly ["https://ip-messaging.twilio.com"];
export declare class CreateMessageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateMessageCreateMessageRequest extends SpeakeasyBase {
    attributes?: string;
    body?: string;
    dateCreated?: Date;
    dateUpdated?: Date;
    from?: string;
    lastUpdatedBy?: string;
    mediaSid?: string;
}
export declare class CreateMessageRequest extends SpeakeasyBase {
    channelSid: string;
    requestBody?: CreateMessageCreateMessageRequest;
    serviceSid: string;
    /**
     * The X-Twilio-Webhook-Enabled HTTP request header
     */
    xTwilioWebhookEnabled?: shared.MessageEnumWebhookEnabledTypeEnum;
}
export declare class CreateMessageResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    ipMessagingV2ServiceChannelMessage?: shared.IpMessagingV2ServiceChannelMessage;
}
