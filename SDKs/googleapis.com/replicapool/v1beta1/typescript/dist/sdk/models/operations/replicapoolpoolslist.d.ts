import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReplicapoolPoolsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ReplicapoolPoolsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ReplicapoolPoolsListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ReplicapoolPoolsListSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ReplicapoolPoolsListSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ReplicapoolPoolsListSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ReplicapoolPoolsListSecurity extends SpeakeasyBase {
    option1?: ReplicapoolPoolsListSecurityOption1;
    option2?: ReplicapoolPoolsListSecurityOption2;
    option3?: ReplicapoolPoolsListSecurityOption3;
    option4?: ReplicapoolPoolsListSecurityOption4;
    option5?: ReplicapoolPoolsListSecurityOption5;
    option6?: ReplicapoolPoolsListSecurityOption6;
}
export declare class ReplicapoolPoolsListRequest extends SpeakeasyBase {
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Maximum count of results to be returned. Acceptable values are 0 to 100, inclusive. (Default: 50)
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Set this to the nextPageToken value returned by a previous list request to obtain the next page of results from the previous list request.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * The project ID for this request.
     */
    projectName: string;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
    /**
     * The zone for this replica pool.
     */
    zone: string;
}
export declare class ReplicapoolPoolsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
