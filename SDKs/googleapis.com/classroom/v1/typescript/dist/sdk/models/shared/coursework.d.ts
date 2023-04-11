import { SpeakeasyBase } from "../../../internal/utils";
import { Assignment } from "./assignment";
import { Date } from "./date";
import { GradeCategory } from "./gradecategory";
import { IndividualStudentsOptions } from "./individualstudentsoptions";
import { Material } from "./material";
import { MultipleChoiceQuestion } from "./multiplechoicequestion";
import { TimeOfDay } from "./timeofday";
/**
 * Assignee mode of the coursework. If unspecified, the default value is `ALL_STUDENTS`.
 */
export declare enum CourseWorkAssigneeModeEnum {
    AssigneeModeUnspecified = "ASSIGNEE_MODE_UNSPECIFIED",
    AllStudents = "ALL_STUDENTS",
    IndividualStudents = "INDIVIDUAL_STUDENTS"
}
/**
 * Status of this course work. If unspecified, the default state is `DRAFT`.
 */
export declare enum CourseWorkStateEnum {
    CourseWorkStateUnspecified = "COURSE_WORK_STATE_UNSPECIFIED",
    Published = "PUBLISHED",
    Draft = "DRAFT",
    Deleted = "DELETED"
}
/**
 * Setting to determine when students are allowed to modify submissions. If unspecified, the default value is `MODIFIABLE_UNTIL_TURNED_IN`.
 */
export declare enum CourseWorkSubmissionModificationModeEnum {
    SubmissionModificationModeUnspecified = "SUBMISSION_MODIFICATION_MODE_UNSPECIFIED",
    ModifiableUntilTurnedIn = "MODIFIABLE_UNTIL_TURNED_IN",
    Modifiable = "MODIFIABLE"
}
/**
 * Type of this course work. The type is set when the course work is created and cannot be changed.
 */
export declare enum CourseWorkWorkTypeEnum {
    CourseWorkTypeUnspecified = "COURSE_WORK_TYPE_UNSPECIFIED",
    Assignment = "ASSIGNMENT",
    ShortAnswerQuestion = "SHORT_ANSWER_QUESTION",
    MultipleChoiceQuestion = "MULTIPLE_CHOICE_QUESTION"
}
/**
 * Course work created by a teacher for students of the course.
 */
export declare class CourseWork extends SpeakeasyBase {
    /**
     * Absolute link to this course work in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only.
     */
    alternateLink?: string;
    /**
     * Assignee mode of the coursework. If unspecified, the default value is `ALL_STUDENTS`.
     */
    assigneeMode?: CourseWorkAssigneeModeEnum;
    /**
     * Additional details for assignments.
     */
    assignment?: Assignment;
    /**
     * Whether this course work item is associated with the Developer Console project making the request. See CreateCourseWork for more details. Read-only.
     */
    associatedWithDeveloper?: boolean;
    /**
     * Identifier of the course. Read-only.
     */
    courseId?: string;
    /**
     * Timestamp when this course work was created. Read-only.
     */
    creationTime?: string;
    /**
     * Identifier for the user that created the coursework. Read-only.
     */
    creatorUserId?: string;
    /**
     * Optional description of this course work. If set, the description must be a valid UTF-8 string containing no more than 30,000 characters.
     */
    description?: string;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    dueDate?: Date;
    /**
     * Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
     */
    dueTime?: TimeOfDay;
    /**
     * Details for a grade category in a course. Coursework may have zero or one grade category, and the category may be used in computing the overall grade. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details.
     */
    gradeCategory?: GradeCategory;
    /**
     * Classroom-assigned identifier of this course work, unique per course. Read-only.
     */
    id?: string;
    /**
     * Assignee details about a coursework/announcement. This field is set if and only if `assigneeMode` is `INDIVIDUAL_STUDENTS`.
     */
    individualStudentsOptions?: IndividualStudentsOptions;
    /**
     * Additional materials. CourseWork must have no more than 20 material items.
     */
    materials?: Material[];
    /**
     * Maximum grade for this course work. If zero or unspecified, this assignment is considered ungraded. This must be a non-negative integer value.
     */
    maxPoints?: number;
    /**
     * Additional details for multiple-choice questions.
     */
    multipleChoiceQuestion?: MultipleChoiceQuestion;
    /**
     * Optional timestamp when this course work is scheduled to be published.
     */
    scheduledTime?: string;
    /**
     * Status of this course work. If unspecified, the default state is `DRAFT`.
     */
    state?: CourseWorkStateEnum;
    /**
     * Setting to determine when students are allowed to modify submissions. If unspecified, the default value is `MODIFIABLE_UNTIL_TURNED_IN`.
     */
    submissionModificationMode?: CourseWorkSubmissionModificationModeEnum;
    /**
     * Title of this course work. The title must be a valid UTF-8 string containing between 1 and 3000 characters.
     */
    title?: string;
    /**
     * Identifier for the topic that this coursework is associated with. Must match an existing topic in the course.
     */
    topicId?: string;
    /**
     * Timestamp of the most recent change to this course work. Read-only.
     */
    updateTime?: string;
    /**
     * Type of this course work. The type is set when the course work is created and cannot be changed.
     */
    workType?: CourseWorkWorkTypeEnum;
}
