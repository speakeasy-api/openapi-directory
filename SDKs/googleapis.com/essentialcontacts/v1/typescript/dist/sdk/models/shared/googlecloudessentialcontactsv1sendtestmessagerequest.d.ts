import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The notification category to send the test message for. All contacts must be subscribed to this category.
 */
export declare enum GoogleCloudEssentialcontactsV1SendTestMessageRequestNotificationCategoryEnum {
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
 * Request message for the SendTestMessage method.
 */
export declare class GoogleCloudEssentialcontactsV1SendTestMessageRequest extends SpeakeasyBase {
    /**
     * Required. The list of names of the contacts to send a test message to. Format: organizations/{organization_id}/contacts/{contact_id}, folders/{folder_id}/contacts/{contact_id} or projects/{project_id}/contacts/{contact_id}
     */
    contacts?: string[];
    /**
     * Required. The notification category to send the test message for. All contacts must be subscribed to this category.
     */
    notificationCategory?: GoogleCloudEssentialcontactsV1SendTestMessageRequestNotificationCategoryEnum;
}
