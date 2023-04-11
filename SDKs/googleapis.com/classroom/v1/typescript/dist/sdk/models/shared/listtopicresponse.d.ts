import { SpeakeasyBase } from "../../../internal/utils";
import { Topic } from "./topic";
/**
 * Response when listing topics.
 */
export declare class ListTopicResponse extends SpeakeasyBase {
    /**
     * Token identifying the next page of results to return. If empty, no further results are available.
     */
    nextPageToken?: string;
    /**
     * Topic items that match the request.
     */
    topic?: Topic[];
}
