import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StorageProjectsHmacKeysListSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageProjectsHmacKeysListSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageProjectsHmacKeysListSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageProjectsHmacKeysListSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageProjectsHmacKeysListSecurity extends SpeakeasyBase {
    option1?: StorageProjectsHmacKeysListSecurityOption1;
    option2?: StorageProjectsHmacKeysListSecurityOption2;
    option3?: StorageProjectsHmacKeysListSecurityOption3;
    option4?: StorageProjectsHmacKeysListSecurityOption4;
}
export declare class StorageProjectsHmacKeysListRequest extends SpeakeasyBase {
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
     * Maximum number of items to return in a single page of responses. The service uses this parameter or 250 items, whichever is smaller. The max number of items per page will also be limited by the number of distinct service accounts in the response. If the number of service accounts in a single response is too high, the page will truncated and a next page token will be returned.
     */
    maxResults?: number;
    /**
     * OAuth 2.0 token for the current user.
     */
    oauthToken?: string;
    /**
     * A previously-returned page token representing part of the larger set of results to view.
     */
    pageToken?: string;
    /**
     * Returns response with indentations and line breaks.
     */
    prettyPrint?: boolean;
    /**
     * Name of the project in which to look for HMAC keys.
     */
    projectId: string;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * If present, only keys for the given service account are returned.
     */
    serviceAccountEmail?: string;
    /**
     * Whether or not to show keys in the DELETED state.
     */
    showDeletedKeys?: boolean;
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
export declare class StorageProjectsHmacKeysListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    hmacKeysMetadata?: shared.HmacKeysMetadata;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
