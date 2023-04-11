import { SpeakeasyBase } from "../../../internal/utils";
import { CustomBiddingModelReadinessState } from "./custombiddingmodelreadinessstate";
/**
 * Required. Immutable. The type of custom bidding algorithm.
 */
export declare enum CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum {
    CustomBiddingAlgorithmTypeUnspecified = "CUSTOM_BIDDING_ALGORITHM_TYPE_UNSPECIFIED",
    ScriptBased = "SCRIPT_BASED",
    AdsDataHubBased = "ADS_DATA_HUB_BASED",
    GoalBuilderBased = "GOAL_BUILDER_BASED"
}
/**
 * Controls whether or not the custom bidding algorithm can be used as a bidding strategy. Accepted values are: * `ENTITY_STATUS_ACTIVE` * `ENTITY_STATUS_ARCHIVED`
 */
export declare enum CustomBiddingAlgorithmEntityStatusEnum {
    EntityStatusUnspecified = "ENTITY_STATUS_UNSPECIFIED",
    EntityStatusActive = "ENTITY_STATUS_ACTIVE",
    EntityStatusArchived = "ENTITY_STATUS_ARCHIVED",
    EntityStatusDraft = "ENTITY_STATUS_DRAFT",
    EntityStatusPaused = "ENTITY_STATUS_PAUSED",
    EntityStatusScheduledForDeletion = "ENTITY_STATUS_SCHEDULED_FOR_DELETION"
}
/**
 * A single custom bidding algorithm.
 */
export declare class CustomBiddingAlgorithmInput extends SpeakeasyBase {
    /**
     * Immutable. The unique ID of the advertiser that owns the custom bidding algorithm.
     */
    advertiserId?: string;
    /**
     * Required. Immutable. The type of custom bidding algorithm.
     */
    customBiddingAlgorithmType?: CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum;
    /**
     * Required. The display name of the custom bidding algorithm. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    displayName?: string;
    /**
     * Controls whether or not the custom bidding algorithm can be used as a bidding strategy. Accepted values are: * `ENTITY_STATUS_ACTIVE` * `ENTITY_STATUS_ARCHIVED`
     */
    entityStatus?: CustomBiddingAlgorithmEntityStatusEnum;
    /**
     * Immutable. The unique ID of the partner that owns the custom bidding algorithm.
     */
    partnerId?: string;
    /**
     * The IDs of the advertisers who have access to this algorithm. If advertiser_id is set, this field will only consist of that value. This field will not be set if the algorithm [`owner`](/display-video/api/reference/rest/v1/customBiddingAlgorithms#CustomBiddingAlgorithm.FIELDS.oneof_owner) is a partner and is being retrieved using an advertiser [`accessor`](/display-video/api/reference/rest/v1/customBiddingAlgorithms/list#body.QUERY_PARAMETERS.oneof_accessor).
     */
    sharedAdvertiserIds?: string[];
}
/**
 * Output only. The status of custom bidding algorithm.
 */
export declare enum CustomBiddingAlgorithmCustomBiddingAlgorithmStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Enabled = "ENABLED",
    Dormant = "DORMANT",
    Suspended = "SUSPENDED"
}
/**
 * A single custom bidding algorithm.
 */
export declare class CustomBiddingAlgorithm extends SpeakeasyBase {
    /**
     * Immutable. The unique ID of the advertiser that owns the custom bidding algorithm.
     */
    advertiserId?: string;
    /**
     * Output only. The unique ID of the custom bidding algorithm. Assigned by the system.
     */
    customBiddingAlgorithmId?: string;
    /**
     * Output only. The status of custom bidding algorithm.
     */
    customBiddingAlgorithmState?: CustomBiddingAlgorithmCustomBiddingAlgorithmStateEnum;
    /**
     * Required. Immutable. The type of custom bidding algorithm.
     */
    customBiddingAlgorithmType?: CustomBiddingAlgorithmCustomBiddingAlgorithmTypeEnum;
    /**
     * Required. The display name of the custom bidding algorithm. Must be UTF-8 encoded with a maximum size of 240 bytes.
     */
    displayName?: string;
    /**
     * Controls whether or not the custom bidding algorithm can be used as a bidding strategy. Accepted values are: * `ENTITY_STATUS_ACTIVE` * `ENTITY_STATUS_ARCHIVED`
     */
    entityStatus?: CustomBiddingAlgorithmEntityStatusEnum;
    /**
     * Output only. The state of custom bidding model readiness for each advertiser who has access. This field may only include the state of the queried advertiser if the algorithm [`owner`](/display-video/api/reference/rest/v1/customBiddingAlgorithms#CustomBiddingAlgorithm.FIELDS.oneof_owner) is a partner and is being retrieved using an advertiser [`accessor`](/display-video/api/reference/rest/v1/customBiddingAlgorithms/list#body.QUERY_PARAMETERS.oneof_accessor).
     */
    modelReadiness?: CustomBiddingModelReadinessState[];
    /**
     * Output only. The resource name of the custom bidding algorithm.
     */
    name?: string;
    /**
     * Immutable. The unique ID of the partner that owns the custom bidding algorithm.
     */
    partnerId?: string;
    /**
     * The IDs of the advertisers who have access to this algorithm. If advertiser_id is set, this field will only consist of that value. This field will not be set if the algorithm [`owner`](/display-video/api/reference/rest/v1/customBiddingAlgorithms#CustomBiddingAlgorithm.FIELDS.oneof_owner) is a partner and is being retrieved using an advertiser [`accessor`](/display-video/api/reference/rest/v1/customBiddingAlgorithms/list#body.QUERY_PARAMETERS.oneof_accessor).
     */
    sharedAdvertiserIds?: string[];
}
