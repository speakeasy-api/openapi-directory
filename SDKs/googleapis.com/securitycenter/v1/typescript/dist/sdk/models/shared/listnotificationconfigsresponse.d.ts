import { SpeakeasyBase } from "../../../internal/utils";
import { NotificationConfig } from "./notificationconfig";
/**
 * Response message for listing notification configs.
 */
export declare class ListNotificationConfigsResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results.
     */
    nextPageToken?: string;
    /**
     * Notification configs belonging to the requested parent.
     */
    notificationConfigs?: NotificationConfig[];
}
