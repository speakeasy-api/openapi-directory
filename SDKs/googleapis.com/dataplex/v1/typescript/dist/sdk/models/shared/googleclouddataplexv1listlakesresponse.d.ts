import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Lake } from "./googleclouddataplexv1lake";
/**
 * List lakes response.
 */
export declare class GoogleCloudDataplexV1ListLakesResponse extends SpeakeasyBase {
    /**
     * Lakes under the given parent location.
     */
    lakes?: GoogleCloudDataplexV1Lake[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachableLocations?: string[];
}
