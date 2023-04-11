import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Job } from "./googleclouddataplexv1job";
/**
 * List jobs response.
 */
export declare class GoogleCloudDataplexV1ListJobsResponse extends SpeakeasyBase {
    /**
     * Jobs under a given task.
     */
    jobs?: GoogleCloudDataplexV1Job[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
