import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1Entry } from "./googleclouddatacatalogv1beta1entry";
/**
 * Response message for ListEntries.
 */
export declare class GoogleCloudDatacatalogV1beta1ListEntriesResponse extends SpeakeasyBase {
    /**
     * Entry details.
     */
    entries?: GoogleCloudDatacatalogV1beta1Entry[];
    /**
     * Token to retrieve the next page of results. It is set to empty if no items remain in results.
     */
    nextPageToken?: string;
}
