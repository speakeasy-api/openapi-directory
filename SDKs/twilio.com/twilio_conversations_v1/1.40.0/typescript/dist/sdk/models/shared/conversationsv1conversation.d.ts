import { SpeakeasyBase } from "../../../internal/utils";
import { ConversationEnumStateEnum } from "./conversationenumstateenum";
/**
 * Created
 */
export declare class ConversationsV1Conversation extends SpeakeasyBase {
    /**
     * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this conversation.
     */
    accountSid?: string;
    /**
     * An optional string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set "{}" will be returned.
     */
    attributes?: string;
    bindings?: any;
    /**
     * The unique ID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) this conversation belongs to.
     */
    chatServiceSid?: string;
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
     * Contains absolute URLs to access the [participants](https://www.twilio.com/docs/conversations/api/conversation-participant-resource), [messages](https://www.twilio.com/docs/conversations/api/conversation-message-resource) and [webhooks](https://www.twilio.com/docs/conversations/api/conversation-scoped-webhook-resource) of this conversation.
     */
    links?: Record<string, any>;
    /**
     * The unique ID of the [Messaging Service](https://www.twilio.com/docs/sms/services/api) this conversation belongs to.
     */
    messagingServiceSid?: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string;
    state?: ConversationEnumStateEnum;
    /**
     * Timer date values representing state update for this conversation.
     */
    timers?: any;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used to address the resource in place of the resource's `sid` in the URL.
     */
    uniqueName?: string;
    /**
     * An absolute API resource URL for this conversation.
     */
    url?: string;
}
