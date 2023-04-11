import { SpeakeasyBase } from "../../../internal/utils";
import { UserProfile } from "./userprofile";
/**
 * Teacher of a course.
 */
export declare class Teacher extends SpeakeasyBase {
    /**
     * Identifier of the course. Read-only.
     */
    courseId?: string;
    /**
     * Global information for a user.
     */
    profile?: UserProfile;
    /**
     * Identifier of the user. When specified as a parameter of a request, this identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     */
    userId?: string;
}
