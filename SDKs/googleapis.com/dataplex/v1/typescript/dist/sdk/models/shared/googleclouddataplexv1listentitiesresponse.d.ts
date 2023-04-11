import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Entity } from "./googleclouddataplexv1entity";
/**
 * List metadata entities response.
 */
export declare class GoogleCloudDataplexV1ListEntitiesResponse extends SpeakeasyBase {
    /**
     * Entities in the specified parent zone.
     */
    entities?: GoogleCloudDataplexV1Entity[];
    /**
     * Token to retrieve the next page of results, or empty if there are no remaining results in the list.
     */
    nextPageToken?: string;
}
