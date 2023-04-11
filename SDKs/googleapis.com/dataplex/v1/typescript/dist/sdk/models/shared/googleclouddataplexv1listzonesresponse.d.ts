import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Zone } from "./googleclouddataplexv1zone";
/**
 * List zones response.
 */
export declare class GoogleCloudDataplexV1ListZonesResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * Zones under the given parent lake.
     */
    zones?: GoogleCloudDataplexV1Zone[];
}
