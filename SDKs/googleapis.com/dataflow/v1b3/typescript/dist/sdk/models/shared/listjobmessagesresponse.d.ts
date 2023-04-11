import { SpeakeasyBase } from "../../../internal/utils";
import { AutoscalingEvent } from "./autoscalingevent";
import { JobMessage } from "./jobmessage";
/**
 * Response to a request to list job messages.
 */
export declare class ListJobMessagesResponse extends SpeakeasyBase {
    /**
     * Autoscaling events in ascending timestamp order.
     */
    autoscalingEvents?: AutoscalingEvent[];
    /**
     * Messages in ascending timestamp order.
     */
    jobMessages?: JobMessage[];
    /**
     * The token to obtain the next page of results if there are more.
     */
    nextPageToken?: string;
}
