import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1Entry } from "./googleclouddatacatalogv1entry";
/**
 * Response message for ListEntries.
 */
export declare class GoogleCloudDatacatalogV1ListEntriesResponse extends SpeakeasyBase {
    /**
     * Entry details.
     */
    entries?: GoogleCloudDatacatalogV1Entry[];
    /**
     * Pagination token of the next results page. Empty if there are no more items in results.
     */
    nextPageToken?: string;
}
