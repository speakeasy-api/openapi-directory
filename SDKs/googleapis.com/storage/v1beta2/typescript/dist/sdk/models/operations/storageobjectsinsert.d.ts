import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StorageObjectsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageObjectsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageObjectsInsertSecurity extends SpeakeasyBase {
    option1?: StorageObjectsInsertSecurityOption1;
    option2?: StorageObjectsInsertSecurityOption2;
}
/**
 * Set of properties to return. Defaults to noAcl, unless the object resource specifies the acl property, when it defaults to full.
 */
export declare enum StorageObjectsInsertProjectionEnum {
    Full = "full",
    NoAcl = "noAcl"
}
export declare class StorageObjectsInsertRequest extends SpeakeasyBase {
    requestBody?: Uint8Array;
    /**
     * Data format for the response.
     */
    alt?: shared.AltEnum;
    /**
     * Name of the bucket in which to store the new object. Overrides the provided object metadata's bucket value, if any.
     */
    bucket: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * Makes the operation conditional on whether the object's current generation matches the given value.
     */
    ifGenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the object's current generation does not match the given value.
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
     * Name of the object. Required when the object metadata is not otherwise provided. Overrides the object metadata's name value, if any.
     */
    name?: string;
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
    projection?: StorageObjectsInsertProjectionEnum;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class StorageObjectsInsertResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    object?: shared.ObjectT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
