import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of activity performed.
 */
export declare enum GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    PostDrafted = "POST_DRAFTED",
    PostPublished = "POST_PUBLISHED",
    PostDeleted = "POST_DELETED",
    PostUnpublished = "POST_UNPUBLISHED"
}
/**
 * An idea activity entry.
 */
export declare class GoogleSearchIdeahubV1alphaIdeaActivity extends SpeakeasyBase {
    /**
     * The Idea IDs for this entry. If empty, topics should be set.
     */
    ideas?: string[];
    /**
     * Unique identifier for the idea activity. The name is ignored when creating an idea activity. Format: platforms/{platform}/properties/{property}/ideaActivities/{idea_activity}
     */
    name?: string;
    /**
     * The Topic IDs for this entry. If empty, ideas should be set.
     */
    topics?: string[];
    /**
     * The type of activity performed.
     */
    type?: GoogleSearchIdeahubV1alphaIdeaActivityTypeEnum;
    /**
     * The uri the activity relates to.
     */
    uri?: string;
}
