import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StorageDefaultObjectAccessControlsListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageDefaultObjectAccessControlsListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageDefaultObjectAccessControlsListSecurity extends SpeakeasyBase {
    option1?: StorageDefaultObjectAccessControlsListSecurityOption1;
    option2?: StorageDefaultObjectAccessControlsListSecurityOption2;
}
export declare class StorageDefaultObjectAccessControlsListRequest extends SpeakeasyBase {
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
     * If present, only return default ACL listing if the bucket's current metageneration matches this value.
     */
    ifMetagenerationMatch?: string;
    /**
     * If present, only return default ACL listing if the bucket's current metageneration does not match the given value.
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
export declare class StorageDefaultObjectAccessControlsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    objectAccessControls?: shared.ObjectAccessControls;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
