import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FitnessUsersSessionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersSessionsListSecurityOption10 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersSessionsListSecurityOption11 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersSessionsListSecurityOption12 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersSessionsListSecurityOption13 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersSessionsListSecurityOption14 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersSessionsListSecurityOption15 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersSessionsListSecurityOption16 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersSessionsListSecurityOption17 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersSessionsListSecurityOption18 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersSessionsListSecurityOption19 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersSessionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersSessionsListSecurityOption20 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersSessionsListSecurityOption21 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersSessionsListSecurityOption22 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersSessionsListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersSessionsListSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersSessionsListSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersSessionsListSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersSessionsListSecurityOption7 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersSessionsListSecurityOption8 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersSessionsListSecurityOption9 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FitnessUsersSessionsListSecurity extends SpeakeasyBase {
    option1?: FitnessUsersSessionsListSecurityOption1;
    option10?: FitnessUsersSessionsListSecurityOption10;
    option11?: FitnessUsersSessionsListSecurityOption11;
    option12?: FitnessUsersSessionsListSecurityOption12;
    option13?: FitnessUsersSessionsListSecurityOption13;
    option14?: FitnessUsersSessionsListSecurityOption14;
    option15?: FitnessUsersSessionsListSecurityOption15;
    option16?: FitnessUsersSessionsListSecurityOption16;
    option17?: FitnessUsersSessionsListSecurityOption17;
    option18?: FitnessUsersSessionsListSecurityOption18;
    option19?: FitnessUsersSessionsListSecurityOption19;
    option2?: FitnessUsersSessionsListSecurityOption2;
    option20?: FitnessUsersSessionsListSecurityOption20;
    option21?: FitnessUsersSessionsListSecurityOption21;
    option22?: FitnessUsersSessionsListSecurityOption22;
    option3?: FitnessUsersSessionsListSecurityOption3;
    option4?: FitnessUsersSessionsListSecurityOption4;
    option5?: FitnessUsersSessionsListSecurityOption5;
    option6?: FitnessUsersSessionsListSecurityOption6;
    option7?: FitnessUsersSessionsListSecurityOption7;
    option8?: FitnessUsersSessionsListSecurityOption8;
    option9?: FitnessUsersSessionsListSecurityOption9;
}
export declare class FitnessUsersSessionsListRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * If non-empty, only sessions with these activity types should be returned.
     */
    activityType?: number[];
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * An RFC3339 timestamp. Only sessions ending between the start and end times will be included in the response. If this time is omitted but startTime is specified, all sessions from startTime to the end of time will be returned.
     */
    endTime?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * If true, and if both startTime and endTime are omitted, session deletions will be returned.
     */
    includeDeleted?: boolean;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * The continuation token, which is used for incremental syncing. To get the next batch of changes, set this parameter to the value of nextPageToken from the previous response. The page token is ignored if either start or end time is specified. If none of start time, end time, and the page token is specified, sessions modified in the last 30 days are returned.
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
     * An RFC3339 timestamp. Only sessions ending between the start and end times will be included in the response. If this time is omitted but endTime is specified, all sessions from the start of time up to endTime will be returned.
     */
    startTime?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
    /**
     * List sessions for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
     */
    userId: string;
}
export declare class FitnessUsersSessionsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    listSessionsResponse?: shared.ListSessionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
