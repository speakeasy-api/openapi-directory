import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsListSecurity extends SpeakeasyBase {
    option1?: ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption1;
    option2?: ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption2;
    option3?: ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption3;
    option4?: ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption4;
    option5?: ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption5;
    option6?: ClassroomCoursesCourseWorkStudentSubmissionsListSecurityOption6;
}
/**
 * Requested lateness value. If specified, returned student submissions are restricted by the requested value. If unspecified, submissions are returned regardless of `late` value.
 */
export declare enum ClassroomCoursesCourseWorkStudentSubmissionsListLateEnum {
    LateValuesUnspecified = "LATE_VALUES_UNSPECIFIED",
    LateOnly = "LATE_ONLY",
    NotLateOnly = "NOT_LATE_ONLY"
}
export declare enum ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum {
    SubmissionStateUnspecified = "SUBMISSION_STATE_UNSPECIFIED",
    New = "NEW",
    Created = "CREATED",
    TurnedIn = "TURNED_IN",
    Returned = "RETURNED",
    ReclaimedByStudent = "RECLAIMED_BY_STUDENT"
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
     */
    courseId: string;
    /**
     * Identifier of the student work to request. This may be set to the string literal `"-"` to request student work for all course work in the specified course.
     */
    courseWorkId: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Requested lateness value. If specified, returned student submissions are restricted by the requested value. If unspecified, submissions are returned regardless of `late` value.
     */
    late?: ClassroomCoursesCourseWorkStudentSubmissionsListLateEnum;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
     */
    pageSize?: number;
    /**
     * nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Requested submission states. If specified, returned student submissions match one of the specified submission states.
     */
    states?: ClassroomCoursesCourseWorkStudentSubmissionsListStatesEnum[];
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * Optional argument to restrict returned student work to those owned by the student with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
     */
    userId?: string;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listStudentSubmissionsResponse?: shared.ListStudentSubmissionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
