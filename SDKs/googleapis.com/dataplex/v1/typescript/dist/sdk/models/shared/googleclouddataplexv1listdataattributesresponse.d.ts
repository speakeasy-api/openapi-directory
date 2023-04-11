import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataAttribute } from "./googleclouddataplexv1dataattribute";
/**
 * List DataAttributes response.
 */
export declare class GoogleCloudDataplexV1ListDataAttributesResponse extends SpeakeasyBase {
    /**
     * DataAttributes under the given parent DataTaxonomy.
     */
    dataAttributes?: GoogleCloudDataplexV1DataAttribute[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachableLocations?: string[];
}
