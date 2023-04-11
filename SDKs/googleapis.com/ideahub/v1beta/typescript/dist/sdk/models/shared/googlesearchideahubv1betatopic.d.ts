import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a Topic umbrella for a list of questions that a Creator may want to respond to.
 */
export declare class GoogleSearchIdeahubV1betaTopic extends SpeakeasyBase {
    /**
     * String displayed to the creator indicating the name of the Topic.
     */
    displayName?: string;
    /**
     * The mID of the topic.
     */
    mid?: string;
    /**
     * Unique identifier for the topic. Format: topics/{topic}
     */
    name?: string;
}
