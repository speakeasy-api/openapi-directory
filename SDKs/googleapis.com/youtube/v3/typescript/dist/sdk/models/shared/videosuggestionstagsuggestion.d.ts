import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A single tag suggestion with it's relevance information.
 */
export declare class VideoSuggestionsTagSuggestion extends SpeakeasyBase {
    /**
     * A set of video categories for which the tag is relevant. You can use this information to display appropriate tag suggestions based on the video category that the video uploader associates with the video. By default, tag suggestions are relevant for all categories if there are no restricts defined for the keyword.
     */
    categoryRestricts?: string[];
    /**
     * The keyword tag suggested for the video.
     */
    tag?: string;
}
