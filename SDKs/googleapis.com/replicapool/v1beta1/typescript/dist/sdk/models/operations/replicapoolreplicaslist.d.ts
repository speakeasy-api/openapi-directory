import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReplicapoolReplicasListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ReplicapoolReplicasListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ReplicapoolReplicasListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ReplicapoolReplicasListSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ReplicapoolReplicasListSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ReplicapoolReplicasListSecurityOption6 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class ReplicapoolReplicasListSecurity extends SpeakeasyBase {
    option1?: ReplicapoolReplicasListSecurityOption1;
    option2?: ReplicapoolReplicasListSecurityOption2;
    option3?: ReplicapoolReplicasListSecurityOption3;
    option4?: ReplicapoolReplicasListSecurityOption4;
    option5?: ReplicapoolReplicasListSecurityOption5;
    option6?: ReplicapoolReplicasListSecurityOption6;
}
export declare class ReplicapoolReplicasListRequest extends SpeakeasyBase {
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
     * The replica pool name for this request.
     */
    poolName: string;
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
     * The zone where the replica pool lives.
     */
    zone: string;
}
export declare class ReplicapoolReplicasListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
