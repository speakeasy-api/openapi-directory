import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The readiness state of custom bidding model.
 */
export declare enum CustomBiddingModelDetailsReadinessStateEnum {
    ReadinessStateUnspecified = "READINESS_STATE_UNSPECIFIED",
    ReadinessStateActive = "READINESS_STATE_ACTIVE",
    ReadinessStateInsufficientData = "READINESS_STATE_INSUFFICIENT_DATA",
    ReadinessStateTraining = "READINESS_STATE_TRAINING",
    ReadinessStateNoValidScript = "READINESS_STATE_NO_VALID_SCRIPT"
}
/**
 * Output only. The suspension state of custom bidding model.
 */
export declare enum CustomBiddingModelDetailsSuspensionStateEnum {
    SuspensionStateUnspecified = "SUSPENSION_STATE_UNSPECIFIED",
    SuspensionStateEnabled = "SUSPENSION_STATE_ENABLED",
    SuspensionStateDormant = "SUSPENSION_STATE_DORMANT",
    SuspensionStateSuspended = "SUSPENSION_STATE_SUSPENDED"
}
/**
 * The details of a custom bidding algorithm model for a single shared advertiser.
 */
export declare class CustomBiddingModelDetails extends SpeakeasyBase {
    /**
     * The unique ID of the relevant advertiser.
     */
    advertiserId?: string;
    /**
     * The readiness state of custom bidding model.
     */
    readinessState?: CustomBiddingModelDetailsReadinessStateEnum;
    /**
     * Output only. The suspension state of custom bidding model.
     */
    suspensionState?: CustomBiddingModelDetailsSuspensionStateEnum;
}
