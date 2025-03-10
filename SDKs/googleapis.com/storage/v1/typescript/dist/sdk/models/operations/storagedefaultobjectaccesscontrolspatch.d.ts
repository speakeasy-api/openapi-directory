import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StorageDefaultObjectAccessControlsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageDefaultObjectAccessControlsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageDefaultObjectAccessControlsPatchSecurity extends SpeakeasyBase {
    option1?: StorageDefaultObjectAccessControlsPatchSecurityOption1;
    option2?: StorageDefaultObjectAccessControlsPatchSecurityOption2;
}
export declare class StorageDefaultObjectAccessControlsPatchRequest extends SpeakeasyBase {
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
     * The entity holding the permission. Can be user-userId, user-emailAddress, group-groupId, group-emailAddress, allUsers, or allAuthenticatedUsers.
     */
    entity: string;
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
export declare class StorageDefaultObjectAccessControlsPatchResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    objectAccessControl?: shared.ObjectAccessControl;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
