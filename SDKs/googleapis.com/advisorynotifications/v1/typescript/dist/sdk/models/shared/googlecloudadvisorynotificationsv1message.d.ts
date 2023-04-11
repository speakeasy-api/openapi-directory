import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAdvisorynotificationsV1Attachment } from "./googlecloudadvisorynotificationsv1attachment";
import { GoogleCloudAdvisorynotificationsV1MessageBody } from "./googlecloudadvisorynotificationsv1messagebody";
/**
 * A message which contains notification details.
 */
export declare class GoogleCloudAdvisorynotificationsV1Message extends SpeakeasyBase {
    /**
     * The attachments to download.
     */
    attachments?: GoogleCloudAdvisorynotificationsV1Attachment[];
    /**
     * A message body containing text.
     */
    body?: GoogleCloudAdvisorynotificationsV1MessageBody;
    /**
     * The Message creation timestamp.
     */
    createTime?: string;
    /**
     * Time when Message was localized
     */
    localizationTime?: string;
}
