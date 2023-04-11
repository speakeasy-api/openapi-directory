import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StorageBucketsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageBucketsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageBucketsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageBucketsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageBucketsGetSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageBucketsGetSecurity extends SpeakeasyBase {
    option1?: StorageBucketsGetSecurityOption1;
    option2?: StorageBucketsGetSecurityOption2;
    option3?: StorageBucketsGetSecurityOption3;
    option4?: StorageBucketsGetSecurityOption4;
    option5?: StorageBucketsGetSecurityOption5;
}
/**
 * Set of properties to return. Defaults to noAcl.
 */
export declare enum StorageBucketsGetProjectionEnum {
    Full = "full",
    NoAcl = "noAcl"
}
export declare class StorageBucketsGetRequest extends SpeakeasyBase {
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Name of a bucket.
     */
    bucket: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Makes the return of the bucket metadata conditional on whether the bucket's current metageneration matches the given value.
     */
    ifMetagenerationMatch?: string;
    /**
     * Makes the return of the bucket metadata conditional on whether the bucket's current metageneration does not match the given value.
     */
    ifMetagenerationNotMatch?: string;
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
     * Set of properties to return. Defaults to noAcl.
     */
    projection?: StorageBucketsGetProjectionEnum;
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
     * The project to be billed for this request. Required for Requester Pays buckets.
     */
    userProject?: string;
}
export declare class StorageBucketsGetResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    bucket?: shared.Bucket;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
