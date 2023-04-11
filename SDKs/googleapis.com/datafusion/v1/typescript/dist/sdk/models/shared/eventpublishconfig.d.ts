import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Confirguration of PubSubEventWriter.
 */
export declare class EventPublishConfig extends SpeakeasyBase {
    /**
     * Required. Option to enable Event Publishing.
     */
    enabled?: boolean;
    /**
     * Required. The resource name of the Pub/Sub topic. Format: projects/{project_id}/topics/{topic_id}
     */
    topic?: string;
}
