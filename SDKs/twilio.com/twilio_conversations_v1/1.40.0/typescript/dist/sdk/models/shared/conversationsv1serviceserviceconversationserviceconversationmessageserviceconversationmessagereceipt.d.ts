import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceConversationMessageReceiptEnumDeliveryStatusEnum } from "./serviceconversationmessagereceiptenumdeliverystatusenum";
/**
 * OK
 */
export declare class ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt extends SpeakeasyBase {
    /**
     * The unique ID of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this participant.
     */
    accountSid?: string;
    /**
     * A messaging channel-specific identifier for the message delivered to participant e.g. `SMxx` for SMS, `WAxx` for Whatsapp etc.
     */
    channelMessageSid?: string;
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) the Message resource is associated with.
     */
    chatServiceSid?: string;
    /**
     * The unique ID of the [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) for this message.
     */
    conversationSid?: string;
    /**
     * The date that this resource was created.
     */
    dateCreated?: Date;
    /**
     * The date that this resource was last updated. `null` if the delivery receipt has not been updated.
     */
    dateUpdated?: Date;
    /**
     * The message [delivery error code](https://www.twilio.com/docs/sms/api/message-resource#delivery-related-errors) for a `failed` status,
     */
    errorCode?: number;
    /**
     * The SID of the message within a [Conversation](https://www.twilio.com/docs/conversations/api/conversation-resource) the delivery receipt belongs to
     */
    messageSid?: string;
    /**
     * The unique ID of the participant the delivery receipt belongs to.
     */
    participantSid?: string;
    /**
     * A 34 character string that uniquely identifies this resource.
     */
    sid?: string;
    status?: ServiceConversationMessageReceiptEnumDeliveryStatusEnum;
    /**
     * An absolute API resource URL for this delivery receipt.
     */
    url?: string;
}
