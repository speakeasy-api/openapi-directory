import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StorageObjectAccessControlsInsertSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageObjectAccessControlsInsertSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageObjectAccessControlsInsertSecurity extends SpeakeasyBase {
    option1?: StorageObjectAccessControlsInsertSecurityOption1;
    option2?: StorageObjectAccessControlsInsertSecurityOption2;
}
export declare class StorageObjectAccessControlsInsertRequest extends SpeakeasyBase {
    objectAccessControl?: shared.ObjectAccessControl;
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
     * If present, selects a specific revision of this object (as opposed to the latest version, the default).
     */
    generation?: string;
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
    object: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
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
export declare class StorageObjectAccessControlsInsertResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    objectAccessControl?: shared.ObjectAccessControl;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
