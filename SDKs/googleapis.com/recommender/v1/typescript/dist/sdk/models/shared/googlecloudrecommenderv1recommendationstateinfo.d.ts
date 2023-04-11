import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The state of the recommendation, Eg ACTIVE, SUCCEEDED, FAILED.
 */
export declare enum GoogleCloudRecommenderV1RecommendationStateInfoStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Claimed = "CLAIMED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Dismissed = "DISMISSED"
}
/**
 * Information for state. Contains state and metadata.
 */
export declare class GoogleCloudRecommenderV1RecommendationStateInfo extends SpeakeasyBase {
    /**
     * The state of the recommendation, Eg ACTIVE, SUCCEEDED, FAILED.
     */
    state?: GoogleCloudRecommenderV1RecommendationStateInfoStateEnum;
    /**
     * A map of metadata for the state, provided by user or automations systems.
     */
    stateMetadata?: Record<string, string>;
}
