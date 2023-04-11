import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Revision } from "./googlecloudrunv2revision";
/**
 * Response message containing a list of Revisions.
 */
export declare class GoogleCloudRunV2ListRevisionsResponse extends SpeakeasyBase {
    /**
     * A token indicating there are more items than page_size. Use it in the next ListRevisions request to continue.
     */
    nextPageToken?: string;
    /**
     * The resulting list of Revisions.
     */
    revisions?: GoogleCloudRunV2Revision[];
}
