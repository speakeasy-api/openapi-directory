import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1Content } from "./googleclouddataplexv1content";
/**
 * List content response.
 */
export declare class GoogleCloudDataplexV1ListContentResponse extends SpeakeasyBase {
    /**
     * Content under the given parent lake.
     */
    content?: GoogleCloudDataplexV1Content[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
