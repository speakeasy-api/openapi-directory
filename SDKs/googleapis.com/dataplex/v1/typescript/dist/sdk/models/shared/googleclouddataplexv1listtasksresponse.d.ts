import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Task } from "./googleclouddataplexv1task";
/**
 * List tasks response.
 */
export declare class GoogleCloudDataplexV1ListTasksResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * Tasks under the given parent lake.
     */
    tasks?: GoogleCloudDataplexV1Task[];
    /**
     * Locations that could not be reached.
     */
    unreachableLocations?: string[];
}
