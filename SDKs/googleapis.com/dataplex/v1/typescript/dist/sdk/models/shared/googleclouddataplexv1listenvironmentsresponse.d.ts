import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Environment } from "./googleclouddataplexv1environment";
/**
 * List environments response.
 */
export declare class GoogleCloudDataplexV1ListEnvironmentsResponse extends SpeakeasyBase {
    /**
     * Environments under the given parent lake.
     */
    environments?: GoogleCloudDataplexV1Environment[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
