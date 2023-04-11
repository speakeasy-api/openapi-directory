import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClassroomCoursesCourseWorkMaterialsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ClassroomCoursesCourseWorkMaterialsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ClassroomCoursesCourseWorkMaterialsListSecurity extends SpeakeasyBase {
    option1?: ClassroomCoursesCourseWorkMaterialsListSecurityOption1;
    option2?: ClassroomCoursesCourseWorkMaterialsListSecurityOption2;
}
export declare enum ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum {
    CourseworkMaterialStateUnspecified = "COURSEWORK_MATERIAL_STATE_UNSPECIFIED",
    Published = "PUBLISHED",
    Draft = "DRAFT",
    Deleted = "DELETED"
}
export declare class ClassroomCoursesCourseWorkMaterialsListRequest extends SpeakeasyBase {
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
     * Restriction on the work status to return. Only course work material that matches is returned. If unspecified, items with a work status of `PUBLISHED` is returned.
     */
    courseWorkMaterialStates?: ClassroomCoursesCourseWorkMaterialsListCourseWorkMaterialStatesEnum[];
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Optional filtering for course work material with at least one Drive material whose ID matches the provided string. If `material_link` is also specified, course work material must have materials matching both filters.
     */
    materialDriveId?: string;
    /**
     * Optional filtering for course work material with at least one link material whose URL partially matches the provided string.
     */
    materialLink?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported field is `updateTime`. Supported direction keywords are `asc` and `desc`. If not specified, `updateTime desc` is the default behavior. Examples: `updateTime asc`, `updateTime`
     */
    orderBy?: string;
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
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class ClassroomCoursesCourseWorkMaterialsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listCourseWorkMaterialResponse?: shared.ListCourseWorkMaterialResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
