import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogLineageV1Process } from "./googleclouddatacataloglineagev1process";
/**
 * Response message for ListProcesses.
 */
export declare class GoogleCloudDatacatalogLineageV1ListProcessesResponse extends SpeakeasyBase {
    /**
     * The token to specify as `page_token` in the next call to get the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * The processes from the specified project and location.
     */
    processes?: GoogleCloudDatacatalogLineageV1Process[];
}
