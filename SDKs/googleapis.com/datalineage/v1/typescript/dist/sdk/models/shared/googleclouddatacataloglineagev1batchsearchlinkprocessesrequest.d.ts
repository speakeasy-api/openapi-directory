import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for BatchSearchLinkProcesses.
 */
export declare class GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesRequest extends SpeakeasyBase {
    /**
     * Required. An array of links to check for their associated LineageProcesses. The maximum number of items in this array is 100. If the request contains more than 100 links, it returns the `INVALID_ARGUMENT` error. Format: `projects/{project}/locations/{location}/links/{link}`.
     */
    links?: string[];
    /**
     * The maximum number of processes to return in a single page of the response. A page may contain fewer results than this value.
     */
    pageSize?: number;
    /**
     * The page token received from a previous `BatchSearchLinkProcesses` call. Use it to get the next page. When requesting subsequent pages of a response, remember that all parameters must match the values you provided in the original request.
     */
    pageToken?: string;
}
