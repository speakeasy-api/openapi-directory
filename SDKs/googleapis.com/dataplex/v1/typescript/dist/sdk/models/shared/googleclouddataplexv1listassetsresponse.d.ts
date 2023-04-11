import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Asset } from "./googleclouddataplexv1asset";
/**
 * List assets response.
 */
export declare class GoogleCloudDataplexV1ListAssetsResponse extends SpeakeasyBase {
    /**
     * Asset under the given parent zone.
     */
    assets?: GoogleCloudDataplexV1Asset[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
