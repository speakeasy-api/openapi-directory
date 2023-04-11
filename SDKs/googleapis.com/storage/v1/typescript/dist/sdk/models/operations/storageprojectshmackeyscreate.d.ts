import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StorageProjectsHmacKeysCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageProjectsHmacKeysCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageProjectsHmacKeysCreateSecurity extends SpeakeasyBase {
    option1?: StorageProjectsHmacKeysCreateSecurityOption1;
    option2?: StorageProjectsHmacKeysCreateSecurityOption2;
}
export declare class StorageProjectsHmacKeysCreateRequest extends SpeakeasyBase {
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
     * Project ID owning the service account.
     */
    projectId: string;
    /**
     * An opaque string that represents a user for quota purposes. Must not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Email address of the service account.
     */
    serviceAccountEmail: string;
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
export declare class StorageProjectsHmacKeysCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    hmacKey?: shared.HmacKey;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
