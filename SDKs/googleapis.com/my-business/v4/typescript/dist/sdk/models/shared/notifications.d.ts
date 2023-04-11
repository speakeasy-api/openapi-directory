import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NotificationsNotificationTypesEnum {
    NotificationTypeUnspecified = "NOTIFICATION_TYPE_UNSPECIFIED",
    GoogleUpdate = "GOOGLE_UPDATE",
    NewReview = "NEW_REVIEW",
    UpdatedReview = "UPDATED_REVIEW",
    NewCustomerMedia = "NEW_CUSTOMER_MEDIA",
    NewQuestion = "NEW_QUESTION",
    UpdatedQuestion = "UPDATED_QUESTION",
    NewAnswer = "NEW_ANSWER",
    UpdatedAnswer = "UPDATED_ANSWER",
    UpdatedLocationState = "UPDATED_LOCATION_STATE"
}
/**
 * A Google Cloud Pub/Sub topic where notifications can be published when a location is updated or has a new review. There will be only one notification settings resource per-account.
 */
export declare class Notifications extends SpeakeasyBase {
    /**
     * Output only. The notifications resource name.
     */
    name?: string;
    /**
     * The types of notifications that will be sent to the Cloud Pub/Sub topic. At least one must be specified. To stop receiving notifications entirely, use DeleteNotifications.
     */
    notificationTypes?: NotificationsNotificationTypesEnum[];
    /**
     * The Google Cloud Pub/Sub topic that will receive notifications when locations managed by this account are updated. If unset, no notifications will be posted. The account mybusiness-api-pubsub@system.gserviceaccount.com must have at least Publish permissions on the Cloud Pub/Sub topic.
     */
    topicName?: string;
}
