import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StorageProjectsHmacKeysUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageProjectsHmacKeysUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageProjectsHmacKeysUpdateSecurity extends SpeakeasyBase {
    option1?: StorageProjectsHmacKeysUpdateSecurityOption1;
    option2?: StorageProjectsHmacKeysUpdateSecurityOption2;
}
export declare class StorageProjectsHmacKeysUpdateRequest extends SpeakeasyBase {
    hmacKeyMetadata?: shared.HmacKeyMetadata;
    /**
     * Name of the HMAC key being updated.
     */
    accessId: string;
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
     * Project ID owning the service account of the updated key.
     */
    projectId: string;
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
export declare class StorageProjectsHmacKeysUpdateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    hmacKeyMetadata?: shared.HmacKeyMetadata;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
