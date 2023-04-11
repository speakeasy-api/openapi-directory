import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StorageObjectsRewriteSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageObjectsRewriteSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageObjectsRewriteSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageObjectsRewriteSecurity extends SpeakeasyBase {
    option1?: StorageObjectsRewriteSecurityOption1;
    option2?: StorageObjectsRewriteSecurityOption2;
    option3?: StorageObjectsRewriteSecurityOption3;
}
/**
 * Apply a predefined set of access controls to the destination object.
 */
export declare enum StorageObjectsRewriteDestinationPredefinedACLEnum {
    AuthenticatedRead = "authenticatedRead",
    BucketOwnerFullControl = "bucketOwnerFullControl",
    BucketOwnerRead = "bucketOwnerRead",
    Private = "private",
    ProjectPrivate = "projectPrivate",
    PublicRead = "publicRead"
}
/**
 * Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
 */
export declare enum StorageObjectsRewriteProjectionEnum {
    Full = "full",
    NoAcl = "noAcl"
}
export declare class StorageObjectsRewriteRequest extends SpeakeasyBase {
    object?: shared.ObjectT;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
     */
    destinationBucket: string;
    /**
     * Resource name of the Cloud KMS key, of the form projects/my-project/locations/global/keyRings/my-kr/cryptoKeys/my-key, that will be used to encrypt the object. Overrides the object metadata's kms_key_name value, if any.
     */
    destinationKmsKeyName?: string;
    /**
     * Name of the new object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
     */
    destinationObject: string;
    /**
     * Apply a predefined set of access controls to the destination object.
     */
    destinationPredefinedAcl?: StorageObjectsRewriteDestinationPredefinedACLEnum;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     */
    ifGenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
     */
    ifGenerationNotMatch?: string;
    /**
     * Makes the operation conditional on whether the destination object's current metageneration matches the given value.
     */
    ifMetagenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the destination object's current metageneration does not match the given value.
     */
    ifMetagenerationNotMatch?: string;
    /**
     * Makes the operation conditional on whether the source object's current generation matches the given value.
     */
    ifSourceGenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the source object's current generation does not match the given value.
     */
    ifSourceGenerationNotMatch?: string;
    /**
     * Makes the operation conditional on whether the source object's current metageneration matches the given value.
     */
    ifSourceMetagenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the source object's current metageneration does not match the given value.
     */
    ifSourceMetagenerationNotMatch?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * The maximum number of bytes that will be rewritten per rewrite request. Most callers shouldn't need to specify this parameter - it is primarily in place to support testing. If specified the value must be an integral multiple of 1 MiB (1048576). Also, this only applies to requests where the source and destination span locations and/or storage classes. Finally, this value must not change across rewrite calls else you'll get an error that the rewriteToken is invalid.
     */
    maxBytesRewrittenPerCall?: string;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
     */
    projection?: StorageObjectsRewriteProjectionEnum;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Include this field (from the previous rewrite response) on each rewrite request after the first one, until the rewrite response 'done' flag is true. Calls that provide a rewriteToken can omit all other request fields, but if included those fields must match the values provided in the first rewrite request.
     */
    rewriteToken?: string;
    /**
     * Name of the bucket in which to find the source object.
     */
    sourceBucket: string;
    /**
     * If present, selects a specific revision of the source object (as opposed to the latest version, the default).
     */
    sourceGeneration?: string;
    /**
     * Name of the source object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
     */
    sourceObject: string;
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
export declare class StorageObjectsRewriteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    rewriteResponse?: shared.RewriteResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
