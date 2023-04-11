import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Job } from "./googlecloudrunv2job";
/**
 * Response message containing a list of Jobs.
 */
export declare class GoogleCloudRunV2ListJobsResponse extends SpeakeasyBase {
    /**
     * The resulting list of Jobs.
     */
    jobs?: GoogleCloudRunV2Job[];
    /**
     * A token indicating there are more items than page_size. Use it in the next ListJobs request to continue.
     */
    nextPageToken?: string;
}
