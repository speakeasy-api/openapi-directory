import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Job } from "./googlecloudmlv1job";
/**
 * Response message for the ListJobs method.
 */
export declare class GoogleCloudMlV1ListJobsResponse extends SpeakeasyBase {
    /**
     * The list of jobs.
     */
    jobs?: GoogleCloudMlV1Job[];
    /**
     * Optional. Pass this token as the `page_token` field of the request for a subsequent call.
     */
    nextPageToken?: string;
}
