import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAdvisorynotificationsV1Csv } from "./googlecloudadvisorynotificationsv1csv";
/**
 * Attachment with specific information about the issue.
 */
export declare class GoogleCloudAdvisorynotificationsV1Attachment extends SpeakeasyBase {
    /**
     * A representation of a CSV file attachment, as a list of column headers and a list of data rows.
     */
    csv?: GoogleCloudAdvisorynotificationsV1Csv;
    /**
     * The title of the attachment.
     */
    displayName?: string;
}
