import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommenderV1Impact } from "./googlecloudrecommenderv1impact";
import { GoogleCloudRecommenderV1RecommendationContent } from "./googlecloudrecommenderv1recommendationcontent";
import { GoogleCloudRecommenderV1RecommendationInsightReference } from "./googlecloudrecommenderv1recommendationinsightreference";
import { GoogleCloudRecommenderV1RecommendationStateInfo } from "./googlecloudrecommenderv1recommendationstateinfo";
/**
 * Recommendation's priority.
 */
export declare enum GoogleCloudRecommenderV1RecommendationPriorityEnum {
    PriorityUnspecified = "PRIORITY_UNSPECIFIED",
    P4 = "P4",
    P3 = "P3",
    P2 = "P2",
    P1 = "P1"
}
/**
 * A recommendation along with a suggested action. E.g., a rightsizing recommendation for an underutilized VM, IAM role recommendations, etc
 */
export declare class GoogleCloudRecommenderV1Recommendation extends SpeakeasyBase {
    /**
     * Optional set of additional impact that this recommendation may have when trying to optimize for the primary category. These may be positive or negative.
     */
    additionalImpact?: GoogleCloudRecommenderV1Impact[];
    /**
     * Insights that led to this recommendation.
     */
    associatedInsights?: GoogleCloudRecommenderV1RecommendationInsightReference[];
    /**
     * Contains what resources are changing and how they are changing.
     */
    content?: GoogleCloudRecommenderV1RecommendationContent;
    /**
     * Free-form human readable summary in English. The maximum length is 500 characters.
     */
    description?: string;
    /**
     * Fingerprint of the Recommendation. Provides optimistic locking when updating states.
     */
    etag?: string;
    /**
     * Last time this recommendation was refreshed by the system that created it in the first place.
     */
    lastRefreshTime?: string;
    /**
     * Name of recommendation.
     */
    name?: string;
    /**
     * Contains the impact a recommendation can have for a given category.
     */
    primaryImpact?: GoogleCloudRecommenderV1Impact;
    /**
     * Recommendation's priority.
     */
    priority?: GoogleCloudRecommenderV1RecommendationPriorityEnum;
    /**
     * Contains an identifier for a subtype of recommendations produced for the same recommender. Subtype is a function of content and impact, meaning a new subtype might be added when significant changes to `content` or `primary_impact.category` are introduced. See the Recommenders section to see a list of subtypes for a given Recommender. Examples: For recommender = "google.iam.policy.Recommender", recommender_subtype can be one of "REMOVE_ROLE"/"REPLACE_ROLE"
     */
    recommenderSubtype?: string;
    /**
     * Information for state. Contains state and metadata.
     */
    stateInfo?: GoogleCloudRecommenderV1RecommendationStateInfo;
    /**
     * Corresponds to a mutually exclusive group ID within a recommender. A non-empty ID indicates that the recommendation belongs to a mutually exclusive group. This means that only one recommendation within the group is suggested to be applied.
     */
    xorGroupId?: string;
}
