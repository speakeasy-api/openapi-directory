import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Session } from "./googleclouddataplexv1session";
/**
 * List sessions response.
 */
export declare class GoogleCloudDataplexV1ListSessionsResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * Sessions under a given environment.
     */
    sessions?: GoogleCloudDataplexV1Session[];
}
