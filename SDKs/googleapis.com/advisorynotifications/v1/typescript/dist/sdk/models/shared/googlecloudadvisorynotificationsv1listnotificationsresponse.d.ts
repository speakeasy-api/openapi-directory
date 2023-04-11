import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAdvisorynotificationsV1Notification } from "./googlecloudadvisorynotificationsv1notification";
/**
 * Response of ListNotifications endpoint.
 */
export declare class GoogleCloudAdvisorynotificationsV1ListNotificationsResponse extends SpeakeasyBase {
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * List of notifications under a given parent.
     */
    notifications?: GoogleCloudAdvisorynotificationsV1Notification[];
    /**
     * Estimation of a total number of notifications.
     */
    totalSize?: number;
}
