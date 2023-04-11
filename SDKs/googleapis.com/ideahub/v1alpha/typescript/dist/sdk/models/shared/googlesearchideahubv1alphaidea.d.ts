import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleSearchIdeahubV1alphaTopic } from "./googlesearchideahubv1alphatopic";
/**
 * A single Idea that we want to show the end user.
 */
export declare class GoogleSearchIdeahubV1alphaIdea extends SpeakeasyBase {
    /**
     * Unique identifier for the idea. Format: ideas/{ideaId}
     */
    name?: string;
    /**
     * The idea’s text.
     */
    text?: string;
    /**
     * The Topics that match the idea.
     */
    topics?: GoogleSearchIdeahubV1alphaTopic[];
}
