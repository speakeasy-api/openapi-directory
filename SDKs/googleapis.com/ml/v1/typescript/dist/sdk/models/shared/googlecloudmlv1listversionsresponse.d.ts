import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Version } from "./googlecloudmlv1version";
/**
 * Response message for the ListVersions method.
 */
export declare class GoogleCloudMlV1ListVersionsResponse extends SpeakeasyBase {
    /**
     * Optional. Pass this token as the `page_token` field of the request for a subsequent call.
     */
    nextPageToken?: string;
    /**
     * The list of versions.
     */
    versions?: GoogleCloudMlV1Version[];
}
