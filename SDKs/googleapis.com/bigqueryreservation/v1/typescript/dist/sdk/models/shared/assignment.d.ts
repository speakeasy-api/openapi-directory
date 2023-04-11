import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Which type of jobs will use the reservation.
 */
export declare enum AssignmentJobTypeEnum {
    JobTypeUnspecified = "JOB_TYPE_UNSPECIFIED",
    Pipeline = "PIPELINE",
    Query = "QUERY",
    MlExternal = "ML_EXTERNAL",
    Background = "BACKGROUND"
}
/**
 * Output only. State of the assignment.
 */
export declare enum AssignmentStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Pending = "PENDING",
    Active = "ACTIVE"
}
/**
 * An assignment allows a project to submit jobs of a certain type using slots from the specified reservation.
 */
export declare class Assignment extends SpeakeasyBase {
    /**
     * The resource which will use the reservation. E.g. `projects/myproject`, `folders/123`, or `organizations/456`.
     */
    assignee?: string;
    /**
     * Which type of jobs will use the reservation.
     */
    jobType?: AssignmentJobTypeEnum;
    /**
     * Output only. Name of the resource. E.g.: `projects/myproject/locations/US/reservations/team1-prod/assignments/123`. The assignment_id must only contain lower case alphanumeric characters or dashes and the max length is 64 characters.
     */
    name?: string;
    /**
     * Output only. State of the assignment.
     */
    state?: AssignmentStateEnum;
}
/**
 * An assignment allows a project to submit jobs of a certain type using slots from the specified reservation.
 */
export declare class AssignmentInput extends SpeakeasyBase {
    /**
     * The resource which will use the reservation. E.g. `projects/myproject`, `folders/123`, or `organizations/456`.
     */
    assignee?: string;
    /**
     * Which type of jobs will use the reservation.
     */
    jobType?: AssignmentJobTypeEnum;
}
