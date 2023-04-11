import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Partition } from "./googleclouddataplexv1partition";
/**
 * List metadata partitions response.
 */
export declare class GoogleCloudDataplexV1ListPartitionsResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no remaining results in the list.
     */
    nextPageToken?: string;
    /**
     * Partitions under the specified parent entity.
     */
    partitions?: GoogleCloudDataplexV1Partition[];
}
