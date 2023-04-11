import { SpeakeasyBase } from "../../../internal/utils";
import { Attachment } from "./attachment";
/**
 * Student work for an assignment.
 */
export declare class AssignmentSubmission extends SpeakeasyBase {
    /**
     * Attachments added by the student. Drive files that correspond to materials with a share mode of STUDENT_COPY may not exist yet if the student has not accessed the assignment in Classroom. Some attachment metadata is only populated if the requesting user has permission to access it. Identifier and alternate_link fields are always available, but others (for example, title) may not be.
     */
    attachments?: Attachment[];
}
