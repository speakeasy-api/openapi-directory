import { SpeakeasyBase } from "../../../internal/utils";
import { ModifyIndividualStudentsOptions } from "./modifyindividualstudentsoptions";
/**
 * Mode of the coursework describing whether it will be assigned to all students or specified individual students.
 */
export declare enum ModifyCourseWorkAssigneesRequestAssigneeModeEnum {
    AssigneeModeUnspecified = "ASSIGNEE_MODE_UNSPECIFIED",
    AllStudents = "ALL_STUDENTS",
    IndividualStudents = "INDIVIDUAL_STUDENTS"
}
/**
 * Request to modify assignee mode and options of a coursework.
 */
export declare class ModifyCourseWorkAssigneesRequest extends SpeakeasyBase {
    /**
     * Mode of the coursework describing whether it will be assigned to all students or specified individual students.
     */
    assigneeMode?: ModifyCourseWorkAssigneesRequestAssigneeModeEnum;
    /**
     * Contains fields to add or remove students from a course work or announcement where the `assigneeMode` is set to `INDIVIDUAL_STUDENTS`.
     */
    modifyIndividualStudentsOptions?: ModifyIndividualStudentsOptions;
}
