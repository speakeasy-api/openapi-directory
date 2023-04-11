import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class ConversationsV1ConversationConversationMessage extends SpeakeasyBase {
    /**
     * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this message.
     */
    accountSid?: string;
    /**
     * A string metadata field you can use to store any data you wish. The string value must contain structurally valid JSON if specified.  **Note** that if the attributes are not set "{}" will be returned.
     */
    attributes?: string;
    /**
     * The channel specific identifier of the message's author. Defaults to `system`.
     */
    author?: string;
    /**
     * The content of the message, can be up to 1,600 characters long.
     */
    body?: string;
    /**
     * The unique ID of the multi-channel [Rich Content](https://www.twilio.com/docs/content-api) template.
     */
    contentSid?: string;
    /**
     * The unique ID of the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this message.
     */
    conversationSid?: string;
    /**
     * The date that this resource was created.
     */
    dateCreated?: Date;
    /**
     * The date that this resource was last updated. `null` if the message has not been edited.
     */
    dateUpdated?: Date;
    /**
     * An object that contains the summary of delivery statuses for the message to non-chat participants.
     */
    delivery?: any;
    /**
     * The index of the message within the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource).  Indices may skip numbers, but will always be in order of when the message was received.
     */
    index?: number;
    /**
     * Contains an absolute API resource URL to access the delivery & read receipts of this message.
     */
    links?: Record<string, any>;
    /**
     * An array of objects that describe the Message's media, if the message contains media. Each object contains these fields: `content_type` with the MIME type of the media, `filename` with the name of the media, `sid` with the SID of the Media resource, and `size` with the media object's file size in bytes. If the Message has no media, this value is `null`.
     */
    media?: any[];
    /**
     * The unique ID of messages's author participant. Null in case of `system` sent message.
     */
    participantSid?: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string;
    /**
     * An absolute API resource API URL for this message.
     */
    url?: string;
}
