import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The broadcast's status. The status can be updated using the API's liveBroadcasts.transition method.
 */
export declare enum LiveBroadcastStatusLifeCycleStatusEnum {
    LifeCycleStatusUnspecified = "lifeCycleStatusUnspecified",
    Created = "created",
    Ready = "ready",
    Testing = "testing",
    Live = "live",
    Complete = "complete",
    Revoked = "revoked",
    TestStarting = "testStarting",
    LiveStarting = "liveStarting"
}
/**
 * Priority of the live broadcast event (internal state).
 */
export declare enum LiveBroadcastStatusLiveBroadcastPriorityEnum {
    LiveBroadcastPriorityUnspecified = "liveBroadcastPriorityUnspecified",
    Low = "low",
    Normal = "normal",
    High = "high"
}
/**
 * The broadcast's privacy status. Note that the broadcast represents exactly one YouTube video, so the privacy settings are identical to those supported for videos. In addition, you can set this field by modifying the broadcast resource or by setting the privacyStatus field of the corresponding video resource.
 */
export declare enum LiveBroadcastStatusPrivacyStatusEnum {
    Public = "public",
    Unlisted = "unlisted",
    Private = "private"
}
/**
 * The broadcast's recording status.
 */
export declare enum LiveBroadcastStatusRecordingStatusEnum {
    LiveBroadcastRecordingStatusUnspecified = "liveBroadcastRecordingStatusUnspecified",
    NotRecording = "notRecording",
    Recording = "recording",
    Recorded = "recorded"
}
/**
 * Live broadcast state.
 */
export declare class LiveBroadcastStatus extends SpeakeasyBase {
    /**
     * The broadcast's status. The status can be updated using the API's liveBroadcasts.transition method.
     */
    lifeCycleStatus?: LiveBroadcastStatusLifeCycleStatusEnum;
    /**
     * Priority of the live broadcast event (internal state).
     */
    liveBroadcastPriority?: LiveBroadcastStatusLiveBroadcastPriorityEnum;
    /**
     * Whether the broadcast is made for kids or not, decided by YouTube instead of the creator. This field is read only.
     */
    madeForKids?: boolean;
    /**
     * The broadcast's privacy status. Note that the broadcast represents exactly one YouTube video, so the privacy settings are identical to those supported for videos. In addition, you can set this field by modifying the broadcast resource or by setting the privacyStatus field of the corresponding video resource.
     */
    privacyStatus?: LiveBroadcastStatusPrivacyStatusEnum;
    /**
     * The broadcast's recording status.
     */
    recordingStatus?: LiveBroadcastStatusRecordingStatusEnum;
    /**
     * This field will be set to True if the creator declares the broadcast to be kids only: go/live-cw-work.
     */
    selfDeclaredMadeForKids?: boolean;
}
