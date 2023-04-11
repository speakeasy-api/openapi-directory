import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateServiceConversationServerList: readonly ["https://conversations.twilio.com"];
export declare class CreateServiceConversationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateServiceConversationCreateServiceConversationRequest extends SpeakeasyBase {
    /**
     * An optional string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set "{}" will be returned.
     */
    attributes?: string;
    /**
     * The date that this resource was created.
     */
    dateCreated?: Date;
    /**
     * The date that this resource was last updated.
     */
    dateUpdated?: Date;
    /**
     * The human-readable name of this conversation, limited to 256 characters. Optional.
     */
    friendlyName?: string;
    /**
     * The unique ID of the [Messaging Service](https://www.twilio.com/docs/sms/services/api) this conversation belongs to.
     */
    messagingServiceSid?: string;
    state?: shared.ServiceConversationEnumStateEnum;
    /**
     * ISO8601 duration when conversation will be switched to `closed` state. Minimum value for this timer is 10 minutes.
     */
    timersClosed?: string;
    /**
     * ISO8601 duration when conversation will be switched to `inactive` state. Minimum value for this timer is 1 minute.
     */
    timersInactive?: string;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used to address the resource in place of the resource's `sid` in the URL.
     */
    uniqueName?: string;
}
export declare class CreateServiceConversationRequest extends SpeakeasyBase {
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) the Conversation resource is associated with.
     */
    chatServiceSid: string;
    requestBody?: CreateServiceConversationCreateServiceConversationRequest;
    /**
     * The X-Twilio-Webhook-Enabled HTTP request header
     */
    xTwilioWebhookEnabled?: shared.ServiceConversationEnumWebhookEnabledTypeEnum;
}
export declare class CreateServiceConversationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    conversationsV1ServiceServiceConversation?: shared.ConversationsV1ServiceServiceConversation;
}
