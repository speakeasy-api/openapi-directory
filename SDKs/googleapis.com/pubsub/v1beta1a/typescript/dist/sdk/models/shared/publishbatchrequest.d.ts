import { SpeakeasyBase } from "../../../internal/utils";
import { PubsubMessage } from "./pubsubmessage";
/**
 * Request for the PublishBatch method.
 */
export declare class PublishBatchRequest extends SpeakeasyBase {
    /**
     * The messages to publish.
     */
    messages?: PubsubMessage[];
    /**
     * The messages in the request will be published on this topic.
     */
    topic?: string;
}
