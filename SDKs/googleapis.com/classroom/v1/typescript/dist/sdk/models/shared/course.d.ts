import { SpeakeasyBase } from "../../../internal/utils";
import { CourseMaterialSet } from "./coursematerialset";
import { DriveFolder } from "./drivefolder";
import { GradebookSettings } from "./gradebooksettings";
/**
 * State of the course. If unspecified, the default state is `PROVISIONED`.
 */
export declare enum CourseCourseStateEnum {
    CourseStateUnspecified = "COURSE_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Archived = "ARCHIVED",
    Provisioned = "PROVISIONED",
    Declined = "DECLINED",
    Suspended = "SUSPENDED"
}
/**
 * A Course in Classroom.
 */
export declare class Course extends SpeakeasyBase {
    /**
     * Absolute link to this course in the Classroom web UI. Read-only.
     */
    alternateLink?: string;
    /**
     * The Calendar ID for a calendar that all course members can see, to which Classroom adds events for course work and announcements in the course. Read-only.
     */
    calendarId?: string;
    /**
     * The email address of a Google group containing all members of the course. This group does not accept email and can only be used for permissions. Read-only.
     */
    courseGroupEmail?: string;
    /**
     * Sets of materials that appear on the "about" page of this course. Read-only.
     */
    courseMaterialSets?: CourseMaterialSet[];
    /**
     * State of the course. If unspecified, the default state is `PROVISIONED`.
     */
    courseState?: CourseCourseStateEnum;
    /**
     * Creation time of the course. Specifying this field in a course update mask results in an error. Read-only.
     */
    creationTime?: string;
    /**
     * Optional description. For example, "We'll be learning about the structure of living creatures from a combination of textbooks, guest lectures, and lab work. Expect to be excited!" If set, this field must be a valid UTF-8 string and no longer than 30,000 characters.
     */
    description?: string;
    /**
     * Optional heading for the description. For example, "Welcome to 10th Grade Biology." If set, this field must be a valid UTF-8 string and no longer than 3600 characters.
     */
    descriptionHeading?: string;
    /**
     * Enrollment code to use when joining this course. Specifying this field in a course update mask results in an error. Read-only.
     */
    enrollmentCode?: string;
    /**
     * The gradebook settings for a course. See the [help center article](https://support.google.com/edu/classroom/answer/9184995) for details.
     */
    gradebookSettings?: GradebookSettings;
    /**
     * Whether or not guardian notifications are enabled for this course. Read-only.
     */
    guardiansEnabled?: boolean;
    /**
     * Identifier for this course assigned by Classroom. When creating a course, you may optionally set this identifier to an alias string in the request to create a corresponding alias. The `id` is still assigned by Classroom and cannot be updated after the course is created. Specifying this field in a course update mask results in an error.
     */
    id?: string;
    /**
     * Name of the course. For example, "10th Grade Biology". The name is required. It must be between 1 and 750 characters and a valid UTF-8 string.
     */
    name?: string;
    /**
     * The identifier of the owner of a course. When specified as a parameter of a create course request, this field is required. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user This must be set in a create request. Admins can also specify this field in a patch course request to transfer ownership. In other contexts, it is read-only.
     */
    ownerId?: string;
    /**
     * Optional room location. For example, "301". If set, this field must be a valid UTF-8 string and no longer than 650 characters.
     */
    room?: string;
    /**
     * Section of the course. For example, "Period 2". If set, this field must be a valid UTF-8 string and no longer than 2800 characters.
     */
    section?: string;
    /**
     * Representation of a Google Drive folder.
     */
    teacherFolder?: DriveFolder;
    /**
     * The email address of a Google group containing all teachers of the course. This group does not accept email and can only be used for permissions. Read-only.
     */
    teacherGroupEmail?: string;
    /**
     * Time of the most recent update to this course. Specifying this field in a course update mask results in an error. Read-only.
     */
    updateTime?: string;
}
