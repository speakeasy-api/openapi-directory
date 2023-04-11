import { SpeakeasyBase } from "../../../internal/utils";
import { PubsubMessage } from "./pubsubmessage";
/**
 * Request for the Publish method.
 */
export declare class PublishRequest extends SpeakeasyBase {
    /**
     * A message data and its labels.
     */
    message?: PubsubMessage;
    /**
     * The message in the request will be published on this topic.
     */
    topic?: string;
}
