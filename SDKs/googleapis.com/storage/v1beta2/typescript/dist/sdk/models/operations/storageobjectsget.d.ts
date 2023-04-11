import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StorageObjectsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageObjectsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageObjectsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageObjectsGetSecurity extends SpeakeasyBase {
    option1?: StorageObjectsGetSecurityOption1;
    option2?: StorageObjectsGetSecurityOption2;
    option3?: StorageObjectsGetSecurityOption3;
}
/**
 * Set of properties to return. Defaults to noAcl.
 */
export declare enum StorageObjectsGetProjectionEnum {
    Full = "full",
    NoAcl = "noAcl"
}
export declare class StorageObjectsGetRequest extends SpeakeasyBase {
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
     * Makes the operation conditional on whether the object's generation matches the given value.
     */
    ifGenerationMatch?: string;
    /**
     * Makes the operation conditional on whether the object's generation does not match the given value.
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
     * Name of the object.
     */
    object: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Set of properties to return. Defaults to noAcl.
     */
    projection?: StorageObjectsGetProjectionEnum;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Deprecated. Please use quotaUser instead.
     */
    userIp?: string;
}
export declare class StorageObjectsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    object?: shared.ObjectT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
