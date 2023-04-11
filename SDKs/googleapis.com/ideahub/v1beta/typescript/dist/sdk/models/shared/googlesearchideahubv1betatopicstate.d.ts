import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents topic state specific to a web property.
 */
export declare class GoogleSearchIdeahubV1betaTopicState extends SpeakeasyBase {
    /**
     * Whether the topic is dismissed.
     */
    dismissed?: boolean;
    /**
     * Unique identifier for the topic state. Format: platforms/{platform}/properties/{property}/topicStates/{topic_state}
     */
    name?: string;
    /**
     * Whether the topic is saved.
     */
    saved?: boolean;
}
