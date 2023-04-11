import { SpeakeasyBase } from "../../../internal/utils";
import { IndividualStudentsOptions } from "./individualstudentsoptions";
import { Material } from "./material";
/**
 * Assignee mode of the course work material. If unspecified, the default value is `ALL_STUDENTS`.
 */
export declare enum CourseWorkMaterialAssigneeModeEnum {
    AssigneeModeUnspecified = "ASSIGNEE_MODE_UNSPECIFIED",
    AllStudents = "ALL_STUDENTS",
    IndividualStudents = "INDIVIDUAL_STUDENTS"
}
/**
 * Status of this course work material. If unspecified, the default state is `DRAFT`.
 */
export declare enum CourseWorkMaterialStateEnum {
    CourseworkMaterialStateUnspecified = "COURSEWORK_MATERIAL_STATE_UNSPECIFIED",
    Published = "PUBLISHED",
    Draft = "DRAFT",
    Deleted = "DELETED"
}
/**
 * Course work material created by a teacher for students of the course
 */
export declare class CourseWorkMaterial extends SpeakeasyBase {
    /**
     * Absolute link to this course work material in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only.
     */
    alternateLink?: string;
    /**
     * Assignee mode of the course work material. If unspecified, the default value is `ALL_STUDENTS`.
     */
    assigneeMode?: CourseWorkMaterialAssigneeModeEnum;
    /**
     * Identifier of the course. Read-only.
     */
    courseId?: string;
    /**
     * Timestamp when this course work material was created. Read-only.
     */
    creationTime?: string;
    /**
     * Identifier for the user that created the course work material. Read-only.
     */
    creatorUserId?: string;
    /**
     * Optional description of this course work material. The text must be a valid UTF-8 string containing no more than 30,000 characters.
     */
    description?: string;
    /**
     * Classroom-assigned identifier of this course work material, unique per course. Read-only.
     */
    id?: string;
    /**
     * Assignee details about a coursework/announcement. This field is set if and only if `assigneeMode` is `INDIVIDUAL_STUDENTS`.
     */
    individualStudentsOptions?: IndividualStudentsOptions;
    /**
     * Additional materials. A course work material must have no more than 20 material items.
     */
    materials?: Material[];
    /**
     * Optional timestamp when this course work material is scheduled to be published.
     */
    scheduledTime?: string;
    /**
     * Status of this course work material. If unspecified, the default state is `DRAFT`.
     */
    state?: CourseWorkMaterialStateEnum;
    /**
     * Title of this course work material. The title must be a valid UTF-8 string containing between 1 and 3000 characters.
     */
    title?: string;
    /**
     * Identifier for the topic that this course work material is associated with. Must match an existing topic in the course.
     */
    topicId?: string;
    /**
     * Timestamp of the most recent change to this course work material. Read-only.
     */
    updateTime?: string;
}
