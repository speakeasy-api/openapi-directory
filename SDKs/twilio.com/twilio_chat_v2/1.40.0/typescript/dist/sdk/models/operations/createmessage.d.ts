import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateMessageServerList: readonly ["https://chat.twilio.com"];
export declare class CreateMessageSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateMessageCreateMessageRequest extends SpeakeasyBase {
    /**
     * A valid JSON string that contains application-specific data.
     */
    attributes?: string;
    /**
     * The message to send to the channel. Can be an empty string or `null`, which sets the value as an empty string. You can send structured data in the body by serializing it as a string.
     */
    body?: string;
    /**
     * The date, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, to assign to the resource as the date it was created. The default value is the current time set by the Chat service. This parameter should only be used when a Chat's history is being recreated from a backup/separate source.
     */
    dateCreated?: Date;
    /**
     * The date, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format, to assign to the resource as the date it was last updated.
     */
    dateUpdated?: Date;
    /**
     * The [Identity](https://www.twilio.com/docs/chat/identity) of the new message's author. The default value is `system`.
     */
    from?: string;
    /**
     * The [Identity](https://www.twilio.com/docs/chat/identity) of the User who last updated the Message, if applicable.
     */
    lastUpdatedBy?: string;
    /**
     * The SID of the [Media](https://www.twilio.com/docs/chat/rest/media) to attach to the new Message.
     */
    mediaSid?: string;
}
export declare class CreateMessageRequest extends SpeakeasyBase {
    /**
     * The SID of the [Channel](https://www.twilio.com/docs/chat/channels) the new Message resource belongs to. This value can be the Channel resource's `sid` or `unique_name`.
     */
    channelSid: string;
    requestBody?: CreateMessageCreateMessageRequest;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) to create the Message resource under.
     */
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
    chatV2ServiceChannelMessage?: shared.ChatV2ServiceChannelMessage;
}
