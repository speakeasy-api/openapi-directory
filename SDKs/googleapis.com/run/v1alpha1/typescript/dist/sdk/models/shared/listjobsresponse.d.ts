import { SpeakeasyBase } from "../../../internal/utils";
import { Job } from "./job";
import { ListMeta } from "./listmeta";
/**
 * ListJobsResponse is a list of Jobs resources.
 */
export declare class ListJobsResponse extends SpeakeasyBase {
    /**
     * The API version for this call such as "run.googleapis.com/v1alpha1".
     */
    apiVersion?: string;
    /**
     * List of Jobs.
     */
    items?: Job[];
    /**
     * The kind of this resource, in this case "JobsList".
     */
    kind?: string;
    /**
     * ListMeta describes metadata that synthetic resources must have, including lists and various status objects. A resource may have only one of {ObjectMeta, ListMeta}.
     */
    metadata?: ListMeta;
    /**
     * This field is equivalent to the metadata.continue field and is provided as a convenience for compatibility with https://google.aip.dev/158. The value is opaque and may be used to issue another request to the endpoint that served this list to retrieve the next set of available objects. Continuing a list may not be possible if the server configuration has changed or more than a few minutes have passed. The metadata.resourceVersion field returned when using this field will be identical to the value in the first response.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
