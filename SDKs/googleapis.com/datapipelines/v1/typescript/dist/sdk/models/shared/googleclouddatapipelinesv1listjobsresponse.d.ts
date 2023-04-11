import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatapipelinesV1Job } from "./googleclouddatapipelinesv1job";
/**
 * Response message for ListJobs
 */
export declare class GoogleCloudDatapipelinesV1ListJobsResponse extends SpeakeasyBase {
    /**
     * Results that were accessible to the caller. Results are always in descending order of job creation date.
     */
    jobs?: GoogleCloudDatapipelinesV1Job[];
    /**
     * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
}
