import { SpeakeasyBase } from "../../../internal/utils";
import { FailedLocation } from "./failedlocation";
import { Job } from "./job";
/**
 * Response to a request to list Cloud Dataflow jobs in a project. This might be a partial response, depending on the page size in the ListJobsRequest. However, if the project does not have any jobs, an instance of ListJobsResponse is not returned and the requests's response body is empty {}.
 */
export declare class ListJobsResponse extends SpeakeasyBase {
    /**
     * Zero or more messages describing the [regional endpoints] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that failed to respond.
     */
    failedLocation?: FailedLocation[];
    /**
     * A subset of the requested job information.
     */
    jobs?: Job[];
    /**
     * Set if there may be more results than fit in this response.
     */
    nextPageToken?: string;
}
