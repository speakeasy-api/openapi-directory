import { SpeakeasyBase } from "../../../internal/utils";
import { IndividualStudentsOptions } from "./individualstudentsoptions";
import { Material } from "./material";
/**
 * Assignee mode of the announcement. If unspecified, the default value is `ALL_STUDENTS`.
 */
export declare enum AnnouncementAssigneeModeEnum {
    AssigneeModeUnspecified = "ASSIGNEE_MODE_UNSPECIFIED",
    AllStudents = "ALL_STUDENTS",
    IndividualStudents = "INDIVIDUAL_STUDENTS"
}
/**
 * Status of this announcement. If unspecified, the default state is `DRAFT`.
 */
export declare enum AnnouncementStateEnum {
    AnnouncementStateUnspecified = "ANNOUNCEMENT_STATE_UNSPECIFIED",
    Published = "PUBLISHED",
    Draft = "DRAFT",
    Deleted = "DELETED"
}
/**
 * Announcement created by a teacher for students of the course
 */
export declare class Announcement extends SpeakeasyBase {
    /**
     * Absolute link to this announcement in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only.
     */
    alternateLink?: string;
    /**
     * Assignee mode of the announcement. If unspecified, the default value is `ALL_STUDENTS`.
     */
    assigneeMode?: AnnouncementAssigneeModeEnum;
    /**
     * Identifier of the course. Read-only.
     */
    courseId?: string;
    /**
     * Timestamp when this announcement was created. Read-only.
     */
    creationTime?: string;
    /**
     * Identifier for the user that created the announcement. Read-only.
     */
    creatorUserId?: string;
    /**
     * Classroom-assigned identifier of this announcement, unique per course. Read-only.
     */
    id?: string;
    /**
     * Assignee details about a coursework/announcement. This field is set if and only if `assigneeMode` is `INDIVIDUAL_STUDENTS`.
     */
    individualStudentsOptions?: IndividualStudentsOptions;
    /**
     * Additional materials. Announcements must have no more than 20 material items.
     */
    materials?: Material[];
    /**
     * Optional timestamp when this announcement is scheduled to be published.
     */
    scheduledTime?: string;
    /**
     * Status of this announcement. If unspecified, the default state is `DRAFT`.
     */
    state?: AnnouncementStateEnum;
    /**
     * Description of this announcement. The text must be a valid UTF-8 string containing no more than 30,000 characters.
     */
    text?: string;
    /**
     * Timestamp of the most recent change to this announcement. Read-only.
     */
    updateTime?: string;
}
