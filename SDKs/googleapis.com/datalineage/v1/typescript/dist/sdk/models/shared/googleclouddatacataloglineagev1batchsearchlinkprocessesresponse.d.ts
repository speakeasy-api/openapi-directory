import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogLineageV1ProcessLinks } from "./googleclouddatacataloglineagev1processlinks";
/**
 * Response message for BatchSearchLinkProcesses.
 */
export declare class GoogleCloudDatacatalogLineageV1BatchSearchLinkProcessesResponse extends SpeakeasyBase {
    /**
     * The token to specify as `page_token` in the subsequent call to get the next page. Omitted if there are no more pages in the response.
     */
    nextPageToken?: string;
    /**
     * An array of processes associated with the specified links.
     */
    processLinks?: GoogleCloudDatacatalogLineageV1ProcessLinks[];
}
