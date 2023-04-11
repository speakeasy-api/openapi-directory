import { SpeakeasyBase } from "../../../internal/utils";
import { ModifyIndividualStudentsOptions } from "./modifyindividualstudentsoptions";
/**
 * Mode of the announcement describing whether it is accessible by all students or specified individual students.
 */
export declare enum ModifyAnnouncementAssigneesRequestAssigneeModeEnum {
    AssigneeModeUnspecified = "ASSIGNEE_MODE_UNSPECIFIED",
    AllStudents = "ALL_STUDENTS",
    IndividualStudents = "INDIVIDUAL_STUDENTS"
}
/**
 * Request to modify assignee mode and options of an announcement.
 */
export declare class ModifyAnnouncementAssigneesRequest extends SpeakeasyBase {
    /**
     * Mode of the announcement describing whether it is accessible by all students or specified individual students.
     */
    assigneeMode?: ModifyAnnouncementAssigneesRequestAssigneeModeEnum;
    /**
     * Contains fields to add or remove students from a course work or announcement where the `assigneeMode` is set to `INDIVIDUAL_STUDENTS`.
     */
    modifyIndividualStudentsOptions?: ModifyIndividualStudentsOptions;
}
