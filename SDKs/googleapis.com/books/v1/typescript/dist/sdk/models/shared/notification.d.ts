import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class Notification extends SpeakeasyBase {
    body?: string;
    /**
     * The list of crm experiment ids.
     */
    crmExperimentIds?: string[];
    docId?: string;
    docType?: string;
    dontShowNotification?: boolean;
    iconUrl?: string;
    isDocumentMature?: boolean;
    /**
     * Resource type.
     */
    kind?: string;
    notificationGroup?: string;
    notificationType?: string;
    pcampaignId?: string;
    reason?: string;
    showNotificationSettingsAction?: boolean;
    targetUrl?: string;
    timeToExpireMs?: string;
    title?: string;
}
