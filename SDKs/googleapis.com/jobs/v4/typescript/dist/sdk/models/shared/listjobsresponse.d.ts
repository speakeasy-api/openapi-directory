import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
import { ResponseMetadata } from "./responsemetadata";
/**
 * List jobs response.
 */
export declare class ListJobsResponse extends SpeakeasyBase {
    /**
     * The Jobs for a given company. The maximum number of items returned is based on the limit field provided in the request.
     */
    jobs?: Job[];
    /**
     * Additional information returned to client, such as debugging information.
     */
    metadata?: ResponseMetadata;
    /**
     * A token to retrieve the next page of results.
     */
    nextPageToken?: string;
}
