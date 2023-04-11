import { SpeakeasyBase } from "../../../internal/utils";
import { AssignmentSubmission } from "./assignmentsubmission";
import { MultipleChoiceSubmission } from "./multiplechoicesubmission";
import { ShortAnswerSubmission } from "./shortanswersubmission";
import { SubmissionHistory } from "./submissionhistory";
/**
 * Type of course work this submission is for. Read-only.
 */
export declare enum StudentSubmissionCourseWorkTypeEnum {
    CourseWorkTypeUnspecified = "COURSE_WORK_TYPE_UNSPECIFIED",
    Assignment = "ASSIGNMENT",
    ShortAnswerQuestion = "SHORT_ANSWER_QUESTION",
    MultipleChoiceQuestion = "MULTIPLE_CHOICE_QUESTION"
}
/**
 * State of this submission. Read-only.
 */
export declare enum StudentSubmissionStateEnum {
    SubmissionStateUnspecified = "SUBMISSION_STATE_UNSPECIFIED",
    New = "NEW",
    Created = "CREATED",
    TurnedIn = "TURNED_IN",
    Returned = "RETURNED",
    ReclaimedByStudent = "RECLAIMED_BY_STUDENT"
}
/**
 * Student submission for course work. StudentSubmission items are generated when a CourseWork item is created. StudentSubmissions that have never been accessed (i.e. with `state` = NEW) may not have a creation time or update time.
 */
export declare class StudentSubmission extends SpeakeasyBase {
    /**
     * Absolute link to the submission in the Classroom web UI. Read-only.
     */
    alternateLink?: string;
    /**
     * Optional grade. If unset, no grade was set. This value must be non-negative. Decimal (that is, non-integer) values are allowed, but are rounded to two decimal places. This may be modified only by course teachers.
     */
    assignedGrade?: number;
    /**
     * Student work for an assignment.
     */
    assignmentSubmission?: AssignmentSubmission;
    /**
     * Whether this student submission is associated with the Developer Console project making the request. See CreateCourseWork for more details. Read-only.
     */
    associatedWithDeveloper?: boolean;
    /**
     * Identifier of the course. Read-only.
     */
    courseId?: string;
    /**
     * Identifier for the course work this corresponds to. Read-only.
     */
    courseWorkId?: string;
    /**
     * Type of course work this submission is for. Read-only.
     */
    courseWorkType?: StudentSubmissionCourseWorkTypeEnum;
    /**
     * Creation time of this submission. This may be unset if the student has not accessed this item. Read-only.
     */
    creationTime?: string;
    /**
     * Optional pending grade. If unset, no grade was set. This value must be non-negative. Decimal (that is, non-integer) values are allowed, but are rounded to two decimal places. This is only visible to and modifiable by course teachers.
     */
    draftGrade?: number;
    /**
     * Classroom-assigned Identifier for the student submission. This is unique among submissions for the relevant course work. Read-only.
     */
    id?: string;
    /**
     * Whether this submission is late. Read-only.
     */
    late?: boolean;
    /**
     * Student work for a multiple-choice question.
     */
    multipleChoiceSubmission?: MultipleChoiceSubmission;
    /**
     * Student work for a short answer question.
     */
    shortAnswerSubmission?: ShortAnswerSubmission;
    /**
     * State of this submission. Read-only.
     */
    state?: StudentSubmissionStateEnum;
    /**
     * The history of the submission (includes state and grade histories). Read-only.
     */
    submissionHistory?: SubmissionHistory[];
    /**
     * Last update time of this submission. This may be unset if the student has not accessed this item. Read-only.
     */
    updateTime?: string;
    /**
     * Identifier for the student that owns this submission. Read-only.
     */
    userId?: string;
}
