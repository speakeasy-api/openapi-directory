import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum {
    NotificationCategoryUnspecified = "NOTIFICATION_CATEGORY_UNSPECIFIED",
    All = "ALL",
    Suspension = "SUSPENSION",
    Security = "SECURITY",
    Technical = "TECHNICAL",
    Billing = "BILLING",
    Legal = "LEGAL",
    ProductUpdates = "PRODUCT_UPDATES",
    TechnicalIncidents = "TECHNICAL_INCIDENTS"
}
/**
 * The validity of the contact. A contact is considered valid if it is the correct recipient for notifications for a particular resource.
 */
export declare enum GoogleCloudEssentialcontactsV1ContactValidationStateEnum {
    ValidationStateUnspecified = "VALIDATION_STATE_UNSPECIFIED",
    Valid = "VALID",
    Invalid = "INVALID"
}
/**
 * A contact that will receive notifications from Google Cloud.
 */
export declare class GoogleCloudEssentialcontactsV1ContactInput extends SpeakeasyBase {
    /**
     * Required. The email address to send notifications to. The email address does not need to be a Google Account.
     */
    email?: string;
    /**
     * Required. The preferred language for notifications, as a ISO 639-1 language code. See [Supported languages](https://cloud.google.com/resource-manager/docs/managing-notification-contacts#supported-languages) for a list of supported languages.
     */
    languageTag?: string;
    /**
     * Required. The categories of notifications that the contact will receive communications for.
     */
    notificationCategorySubscriptions?: GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum[];
    /**
     * The last time the validation_state was updated, either manually or automatically. A contact is considered stale if its validation state was updated more than 1 year ago.
     */
    validateTime?: string;
    /**
     * The validity of the contact. A contact is considered valid if it is the correct recipient for notifications for a particular resource.
     */
    validationState?: GoogleCloudEssentialcontactsV1ContactValidationStateEnum;
}
/**
 * A contact that will receive notifications from Google Cloud.
 */
export declare class GoogleCloudEssentialcontactsV1Contact extends SpeakeasyBase {
    /**
     * Required. The email address to send notifications to. The email address does not need to be a Google Account.
     */
    email?: string;
    /**
     * Required. The preferred language for notifications, as a ISO 639-1 language code. See [Supported languages](https://cloud.google.com/resource-manager/docs/managing-notification-contacts#supported-languages) for a list of supported languages.
     */
    languageTag?: string;
    /**
     * Output only. The identifier for the contact. Format: {resource_type}/{resource_id}/contacts/{contact_id}
     */
    name?: string;
    /**
     * Required. The categories of notifications that the contact will receive communications for.
     */
    notificationCategorySubscriptions?: GoogleCloudEssentialcontactsV1ContactNotificationCategorySubscriptionsEnum[];
    /**
     * The last time the validation_state was updated, either manually or automatically. A contact is considered stale if its validation state was updated more than 1 year ago.
     */
    validateTime?: string;
    /**
     * The validity of the contact. A contact is considered valid if it is the correct recipient for notifications for a particular resource.
     */
    validationState?: GoogleCloudEssentialcontactsV1ContactValidationStateEnum;
}
