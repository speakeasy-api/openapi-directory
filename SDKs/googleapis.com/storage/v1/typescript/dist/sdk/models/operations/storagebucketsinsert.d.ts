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
export declare class StorageBucketsInsertSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageBucketsInsertSecurity extends SpeakeasyBase {
    option1?: StorageBucketsInsertSecurityOption1;
    option2?: StorageBucketsInsertSecurityOption2;
    option3?: StorageBucketsInsertSecurityOption3;
}
/**
 * Apply a predefined set of access controls to this bucket.
 */
export declare enum StorageBucketsInsertPredefinedACLEnum {
    AuthenticatedRead = "authenticatedRead",
    Private = "private",
    ProjectPrivate = "projectPrivate",
    PublicRead = "publicRead",
    PublicReadWrite = "publicReadWrite"
}
/**
 * Apply a predefined set of default object access controls to this bucket.
 */
export declare enum StorageBucketsInsertPredefinedDefaultObjectACLEnum {
    AuthenticatedRead = "authenticatedRead",
    BucketOwnerFullControl = "bucketOwnerFullControl",
    BucketOwnerRead = "bucketOwnerRead",
    Private = "private",
    ProjectPrivate = "projectPrivate",
    PublicRead = "publicRead"
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
     * Apply a predefined set of access controls to this bucket.
     */
    predefinedAcl?: StorageBucketsInsertPredefinedACLEnum;
    /**
     * Apply a predefined set of default object access controls to this bucket.
     */
    predefinedDefaultObjectAcl?: StorageBucketsInsertPredefinedDefaultObjectACLEnum;
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
export declare class StorageBucketsInsertResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    bucket?: shared.Bucket;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
