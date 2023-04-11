import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metadata for a Pub/Sub connector used by the job.
 */
export declare class PubSubIODetails extends SpeakeasyBase {
    /**
     * Subscription used in the connection.
     */
    subscription?: string;
    /**
     * Topic accessed in the connection.
     */
    topic?: string;
}
