import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StorageBucketsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageBucketsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageBucketsListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageBucketsListSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageBucketsListSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageBucketsListSecurity extends SpeakeasyBase {
    option1?: StorageBucketsListSecurityOption1;
    option2?: StorageBucketsListSecurityOption2;
    option3?: StorageBucketsListSecurityOption3;
    option4?: StorageBucketsListSecurityOption4;
    option5?: StorageBucketsListSecurityOption5;
}
/**
 * Set of properties to return. Defaults to noAcl.
 */
export declare enum StorageBucketsListProjectionEnum {
    Full = "full",
    NoAcl = "noAcl"
}
export declare class StorageBucketsListRequest extends SpeakeasyBase {
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
     * Maximum number of buckets to return in a single response. The service will use this parameter or 1,000 items, whichever is smaller.
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * A previously-returned page token representing part of the larger set of results to view.
     */
    pageToken?: string;
    /**
     * Filter results to buckets whose names begin with this prefix.
     */
    prefix?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * A valid API project identifier.
     */
    project: string;
    /**
     * Set of properties to return. Defaults to noAcl.
     */
    projection?: StorageBucketsListProjectionEnum;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Upload protocol for media (e.g. "media", "multipart", "resumable").
     */
    uploadType?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
    /**
     * The project to be billed for this request.
     */
    userProject?: string;
}
export declare class StorageBucketsListResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    buckets?: shared.Buckets;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
