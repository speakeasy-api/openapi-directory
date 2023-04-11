import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NotificationSettingNotificationTypesEnum {
    NotificationTypeUnspecified = "NOTIFICATION_TYPE_UNSPECIFIED",
    GoogleUpdate = "GOOGLE_UPDATE",
    NewReview = "NEW_REVIEW",
    UpdatedReview = "UPDATED_REVIEW",
    NewCustomerMedia = "NEW_CUSTOMER_MEDIA",
    NewQuestion = "NEW_QUESTION",
    UpdatedQuestion = "UPDATED_QUESTION",
    NewAnswer = "NEW_ANSWER",
    UpdatedAnswer = "UPDATED_ANSWER",
    DuplicateLocation = "DUPLICATE_LOCATION",
    LossOfVoiceOfMerchant = "LOSS_OF_VOICE_OF_MERCHANT",
    VoiceOfMerchantUpdated = "VOICE_OF_MERCHANT_UPDATED"
}
/**
 * A Google Pub/Sub topic where notifications can be published when a location is updated or has a new review. There will be only one notification setting resource per-account.
 */
export declare class NotificationSetting extends SpeakeasyBase {
    /**
     * Required. The resource name this setting is for. This is of the form `accounts/{account_id}/notificationSetting`.
     */
    name?: string;
    /**
     * The types of notifications that will be sent to the Pub/Sub topic. To stop receiving notifications entirely, use NotificationSettings.UpdateNotificationSetting with an empty notification_types or set the pubsub_topic to an empty string.
     */
    notificationTypes?: NotificationSettingNotificationTypesEnum[];
    /**
     * Optional. The Google Pub/Sub topic that will receive notifications when locations managed by this account are updated. If unset, no notifications will be posted. The account mybusiness-api-pubsub@system.gserviceaccount.com must have at least Publish permissions on the Pub/Sub topic.
     */
    pubsubTopic?: string;
}
