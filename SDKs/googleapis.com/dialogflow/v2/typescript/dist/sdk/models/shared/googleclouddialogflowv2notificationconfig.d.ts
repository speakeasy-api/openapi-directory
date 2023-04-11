import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Format of message.
 */
export declare enum GoogleCloudDialogflowV2NotificationConfigMessageFormatEnum {
    MessageFormatUnspecified = "MESSAGE_FORMAT_UNSPECIFIED",
    Proto = "PROTO",
    Json = "JSON"
}
/**
 * Defines notification behavior.
 */
export declare class GoogleCloudDialogflowV2NotificationConfig extends SpeakeasyBase {
    /**
     * Format of message.
     */
    messageFormat?: GoogleCloudDialogflowV2NotificationConfigMessageFormatEnum;
    /**
     * Name of the Pub/Sub topic to publish conversation events like CONVERSATION_STARTED as serialized ConversationEvent protos. For telephony integration to receive notification, make sure either this topic is in the same project as the conversation or you grant `service-@gcp-sa-dialogflow.iam.gserviceaccount.com` the `Dialogflow Service Agent` role in the topic project. For chat integration to receive notification, make sure API caller has been granted the `Dialogflow Service Agent` role for the topic. Format: `projects//locations//topics/`.
     */
    topic?: string;
}
