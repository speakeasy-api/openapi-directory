import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StorageBucketsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageBucketsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageBucketsInsertSecurity extends SpeakeasyBase {
    option1?: StorageBucketsInsertSecurityOption1;
    option2?: StorageBucketsInsertSecurityOption2;
}
/**
 * Set of properties to return. Defaults to noAcl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full.
 */
export declare enum StorageBucketsInsertProjectionEnum {
    Full = "full",
    NoAcl = "noAcl"
}
export declare class StorageBucketsInsertRequest extends SpeakeasyBase {
    bucket?: shared.Bucket;
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
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * A valid API project identifier.
     */
    project: string;
    /**
     * Set of properties to return. Defaults to noAcl, unless the bucket resource specifies acl or defaultObjectAcl properties, when it defaults to full.
     */
    projection?: StorageBucketsInsertProjectionEnum;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class StorageBucketsInsertResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    bucket?: shared.Bucket;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
