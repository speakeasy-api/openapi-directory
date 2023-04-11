import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Role to invite the user to have. Must not be `COURSE_ROLE_UNSPECIFIED`.
 */
export declare enum InvitationRoleEnum {
    CourseRoleUnspecified = "COURSE_ROLE_UNSPECIFIED",
    Student = "STUDENT",
    Teacher = "TEACHER",
    Owner = "OWNER"
}
/**
 * An invitation to join a course.
 */
export declare class Invitation extends SpeakeasyBase {
    /**
     * Identifier of the course to invite the user to.
     */
    courseId?: string;
    /**
     * Identifier assigned by Classroom. Read-only.
     */
    id?: string;
    /**
     * Role to invite the user to have. Must not be `COURSE_ROLE_UNSPECIFIED`.
     */
    role?: InvitationRoleEnum;
    /**
     * Identifier of the invited user. When specified as a parameter of a request, this identifier can be set to one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     */
    userId?: string;
}
