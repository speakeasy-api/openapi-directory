import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The position where the ad will show in a session.
 */
export declare enum SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum {
    SessionPositionUnspecified = "SESSION_POSITION_UNSPECIFIED",
    SessionPositionFirstImpression = "SESSION_POSITION_FIRST_IMPRESSION"
}
/**
 * Details for session position assigned targeting option. This will be populated in the session_position_details field when targeting_type is `TARGETING_TYPE_SESSION_POSITION`.
 */
export declare class SessionPositionAssignedTargetingOptionDetails extends SpeakeasyBase {
    /**
     * The position where the ad will show in a session.
     */
    sessionPosition?: SessionPositionAssignedTargetingOptionDetailsSessionPositionEnum;
}
