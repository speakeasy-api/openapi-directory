import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Pub/Sub destination.
 */
export declare class PubsubDestination extends SpeakeasyBase {
    /**
     * The name of the Pub/Sub topic to publish job completion notification to. For example: `projects/{project}/topics/{topic}`.
     */
    topic?: string;
}
