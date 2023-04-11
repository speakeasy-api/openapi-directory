import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClassroomUserProfilesGuardianInvitationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ClassroomUserProfilesGuardianInvitationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ClassroomUserProfilesGuardianInvitationsGetSecurity extends SpeakeasyBase {
    option1?: ClassroomUserProfilesGuardianInvitationsGetSecurityOption1;
    option2?: ClassroomUserProfilesGuardianInvitationsGetSecurityOption2;
}
export declare class ClassroomUserProfilesGuardianInvitationsGetRequest extends SpeakeasyBase {
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
     * The `id` field of the `GuardianInvitation` being requested.
     */
    invitationId: string;
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
     * The ID of the student whose guardian invitation is being requested.
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
export declare class ClassroomUserProfilesGuardianInvitationsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    guardianInvitation?: shared.GuardianInvitation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
