import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAdvisorynotificationsV1Message } from "./googlecloudadvisorynotificationsv1message";
import { GoogleCloudAdvisorynotificationsV1Subject } from "./googlecloudadvisorynotificationsv1subject";
/**
 * A notification object for notifying customers about security and privacy issues.
 */
export declare class GoogleCloudAdvisorynotificationsV1Notification extends SpeakeasyBase {
    /**
     * Output only. Time the notification was created.
     */
    createTime?: string;
    /**
     * A list of messages in the notification.
     */
    messages?: GoogleCloudAdvisorynotificationsV1Message[];
    /**
     * The resource name of the notification. Format: organizations/{organization}/locations/{location}/notifications/{notification}.
     */
    name?: string;
    /**
     * A subject line of a notification.
     */
    subject?: GoogleCloudAdvisorynotificationsV1Subject;
}
