import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Pub/Sub destination.
 */
export declare class PubsubDestination extends SpeakeasyBase {
    /**
     * The name of the Pub/Sub topic to publish to. Example: `projects/PROJECT_ID/topics/TOPIC_ID`.
     */
    topic?: string;
}
