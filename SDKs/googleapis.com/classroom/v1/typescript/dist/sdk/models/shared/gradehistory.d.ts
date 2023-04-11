import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of grade change at this time in the submission grade history.
 */
export declare enum GradeHistoryGradeChangeTypeEnum {
    UnknownGradeChangeType = "UNKNOWN_GRADE_CHANGE_TYPE",
    DraftGradePointsEarnedChange = "DRAFT_GRADE_POINTS_EARNED_CHANGE",
    AssignedGradePointsEarnedChange = "ASSIGNED_GRADE_POINTS_EARNED_CHANGE",
    MaxPointsChange = "MAX_POINTS_CHANGE"
}
/**
 * The history of each grade on this submission.
 */
export declare class GradeHistory extends SpeakeasyBase {
    /**
     * The teacher who made the grade change.
     */
    actorUserId?: string;
    /**
     * The type of grade change at this time in the submission grade history.
     */
    gradeChangeType?: GradeHistoryGradeChangeTypeEnum;
    /**
     * When the grade of the submission was changed.
     */
    gradeTimestamp?: string;
    /**
     * The denominator of the grade at this time in the submission grade history.
     */
    maxPoints?: number;
    /**
     * The numerator of the grade at this time in the submission grade history.
     */
    pointsEarned?: number;
}
