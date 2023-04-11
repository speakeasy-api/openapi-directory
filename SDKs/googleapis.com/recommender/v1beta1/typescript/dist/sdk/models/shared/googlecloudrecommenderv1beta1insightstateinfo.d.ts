import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Insight state.
 */
export declare enum GoogleCloudRecommenderV1beta1InsightStateInfoStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Accepted = "ACCEPTED",
    Dismissed = "DISMISSED"
}
/**
 * Information related to insight state.
 */
export declare class GoogleCloudRecommenderV1beta1InsightStateInfo extends SpeakeasyBase {
    /**
     * Insight state.
     */
    state?: GoogleCloudRecommenderV1beta1InsightStateInfoStateEnum;
    /**
     * A map of metadata for the state, provided by user or automations systems.
     */
    stateMetadata?: Record<string, string>;
}
