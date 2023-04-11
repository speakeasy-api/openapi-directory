import { SpeakeasyBase } from "../../../internal/utils";
import { Topic } from "./topic";
/**
 * Response for the ListTopics method.
 */
export declare class ListTopicsResponse extends SpeakeasyBase {
    /**
     * If not empty, indicates that there are more topics that match the request, and this value should be passed to the next ListTopicsRequest to continue.
     */
    nextPageToken?: string;
    /**
     * The resulting topics.
     */
    topic?: Topic[];
}
