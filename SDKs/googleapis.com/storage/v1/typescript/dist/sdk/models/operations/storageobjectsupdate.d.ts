import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StorageObjectsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageObjectsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageObjectsUpdateSecurity extends SpeakeasyBase {
    option1?: StorageObjectsUpdateSecurityOption1;
    option2?: StorageObjectsUpdateSecurityOption2;
}
/**
 * Apply a predefined set of access controls to this object.
 */
export declare enum StorageObjectsUpdatePredefinedACLEnum {
    AuthenticatedRead = "authenticatedRead",
    BucketOwnerFullControl = "bucketOwnerFullControl",
    BucketOwnerRead = "bucketOwnerRead",
    Private = "private",
    ProjectPrivate = "projectPrivate",
    PublicRead = "publicRead"
}
/**
 * Set of properties to return. Defaults to full.
 */
export declare enum StorageObjectsUpdateProjectionEnum {
    Full = "full",
    NoAcl = "noAcl"
}
export declare class StorageObjectsUpdateRequest extends SpeakeasyBase {
    object1?: shared.ObjectT;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Name of the bucket in which the object resides.
     */
    bucket: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * If present, selects a specific revision of this object (as opposed to the latest version, the default).
     */
    generation?: string;
    /**
     * Makes the operation conditional on whether the object's current generation matches the given value. Setting to 0 makes the operation succeed only if there are no live versions of the object.
     */
    ifGenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the object's current generation does not match the given value. If no live object exists, the precondition fails. Setting to 0 makes the operation succeed only if there is a live version of the object.
     */
    ifGenerationNotMatch?: string;
    /**
     * Makes the operation conditional on whether the object's current metageneration matches the given value.
     */
    ifMetagenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the object's current metageneration does not match the given value.
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
     * Name of the object. For information about how to URL encode object names to be path safe, see Encoding URI Path Parts.
     */
    objectPathParameter: string;
    /**
     * Apply a predefined set of access controls to this object.
     */
    predefinedAcl?: StorageObjectsUpdatePredefinedACLEnum;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Set of properties to return. Defaults to full.
     */
    projection?: StorageObjectsUpdateProjectionEnum;
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
export declare class StorageObjectsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    object?: shared.ObjectT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
