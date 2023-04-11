import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The workflow pipeline stage.
 */
export declare enum StateHistoryStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Created = "CREATED",
    TurnedIn = "TURNED_IN",
    Returned = "RETURNED",
    ReclaimedByStudent = "RECLAIMED_BY_STUDENT",
    StudentEditedAfterTurnIn = "STUDENT_EDITED_AFTER_TURN_IN"
}
/**
 * The history of each state this submission has been in.
 */
export declare class StateHistory extends SpeakeasyBase {
    /**
     * The teacher or student who made the change.
     */
    actorUserId?: string;
    /**
     * The workflow pipeline stage.
     */
    state?: StateHistoryStateEnum;
    /**
     * When the submission entered this state.
     */
    stateTimestamp?: string;
}
