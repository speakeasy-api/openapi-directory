import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurity extends SpeakeasyBase {
    option1?: ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption1;
    option2?: ClassroomCoursesCourseWorkStudentSubmissionsPatchSecurityOption2;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsPatchRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    studentSubmission?: shared.StudentSubmission;
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
     * Identifier of the course work.
     */
    courseWorkId: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Identifier of the student submission.
     */
    id: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Mask that identifies which fields on the student submission to update. This field is required to do an update. The update fails if invalid fields are specified. The following fields may be specified by teachers: * `draft_grade` * `assigned_grade`
     */
    updateMask?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class ClassroomCoursesCourseWorkStudentSubmissionsPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful response
     */
    studentSubmission?: shared.StudentSubmission;
}
