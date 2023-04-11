import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClassroomUserProfilesGuardianInvitationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ClassroomUserProfilesGuardianInvitationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ClassroomUserProfilesGuardianInvitationsListSecurity extends SpeakeasyBase {
    option1?: ClassroomUserProfilesGuardianInvitationsListSecurityOption1;
    option2?: ClassroomUserProfilesGuardianInvitationsListSecurityOption2;
}
export declare enum ClassroomUserProfilesGuardianInvitationsListStatesEnum {
    GuardianInvitationStateUnspecified = "GUARDIAN_INVITATION_STATE_UNSPECIFIED",
    Pending = "PENDING",
    Complete = "COMPLETE"
}
export declare class ClassroomUserProfilesGuardianInvitationsListRequest extends SpeakeasyBase {
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
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * If specified, only results with the specified `invited_email_address` are returned.
     */
    invitedEmailAddress?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
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
     * If specified, only results with the specified `state` values are returned. Otherwise, results with a `state` of `PENDING` are returned.
     */
    states?: ClassroomUserProfilesGuardianInvitationsListStatesEnum[];
    /**
     * The ID of the student whose guardian invitations are to be returned. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user * the string literal `"-"`, indicating that results should be returned for all students that the requesting user is permitted to view guardian invitations.
     */
    studentId: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class ClassroomUserProfilesGuardianInvitationsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listGuardianInvitationsResponse?: shared.ListGuardianInvitationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
