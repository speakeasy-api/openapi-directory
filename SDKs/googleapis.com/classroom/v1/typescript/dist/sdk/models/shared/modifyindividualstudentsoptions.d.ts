import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains fields to add or remove students from a course work or announcement where the `assigneeMode` is set to `INDIVIDUAL_STUDENTS`.
 */
export declare class ModifyIndividualStudentsOptions extends SpeakeasyBase {
    /**
     * IDs of students to be added as having access to this coursework/announcement.
     */
    addStudentIds?: string[];
    /**
     * IDs of students to be removed from having access to this coursework/announcement.
     */
    removeStudentIds?: string[];
}
