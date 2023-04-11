import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateServiceNotificationServerList: readonly ["https://conversations.twilio.com"];
export declare class UpdateServiceNotificationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateServiceNotificationUpdateServiceNotificationRequest extends SpeakeasyBase {
    /**
     * Whether to send a notification when a participant is added to a conversation. The default is `false`.
     */
    addedToConversationEnabled?: boolean;
    /**
     * The name of the sound to play when a participant is added to a conversation and `added_to_conversation.enabled` is `true`.
     */
    addedToConversationSound?: string;
    /**
     * The template to use to create the notification text displayed when a participant is added to a conversation and `added_to_conversation.enabled` is `true`.
     */
    addedToConversationTemplate?: string;
    /**
     * Weather the notification logging is enabled.
     */
    logEnabled?: boolean;
    /**
     * Whether the new message badge is enabled. The default is `false`.
     */
    newMessageBadgeCountEnabled?: boolean;
    /**
     * Whether to send a notification when a new message is added to a conversation. The default is `false`.
     */
    newMessageEnabled?: boolean;
    /**
     * The name of the sound to play when a new message is added to a conversation and `new_message.enabled` is `true`.
     */
    newMessageSound?: string;
    /**
     * The template to use to create the notification text displayed when a new message is added to a conversation and `new_message.enabled` is `true`.
     */
    newMessageTemplate?: string;
    /**
     * Whether to send a notification when a new message with media/file attachments is added to a conversation. The default is `false`.
     */
    newMessageWithMediaEnabled?: boolean;
    /**
     * The template to use to create the notification text displayed when a new message with media/file attachments is added to a conversation and `new_message.attachments.enabled` is `true`.
     */
    newMessageWithMediaTemplate?: string;
    /**
     * Whether to send a notification to a user when they are removed from a conversation. The default is `false`.
     */
    removedFromConversationEnabled?: boolean;
    /**
     * The name of the sound to play to a user when they are removed from a conversation and `removed_from_conversation.enabled` is `true`.
     */
    removedFromConversationSound?: string;
    /**
     * The template to use to create the notification text displayed to a user when they are removed from a conversation and `removed_from_conversation.enabled` is `true`.
     */
    removedFromConversationTemplate?: string;
}
export declare class UpdateServiceNotificationRequest extends SpeakeasyBase {
    /**
     * The SID of the [Conversation Service](https://www.twilio.com/docs/conversations/api/service-resource) the Configuration applies to.
     */
    chatServiceSid: string;
    requestBody?: UpdateServiceNotificationUpdateServiceNotificationRequest;
}
export declare class UpdateServiceNotificationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1ServiceServiceConfigurationServiceNotification?: shared.ConversationsV1ServiceServiceConfigurationServiceNotification;
}
