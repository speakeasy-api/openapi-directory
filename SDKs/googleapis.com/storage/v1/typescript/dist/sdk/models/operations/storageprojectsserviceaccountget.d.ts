import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StorageProjectsServiceAccountGetSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageProjectsServiceAccountGetSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageProjectsServiceAccountGetSecurityOption3 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageProjectsServiceAccountGetSecurityOption4 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageProjectsServiceAccountGetSecurityOption5 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class StorageProjectsServiceAccountGetSecurity extends SpeakeasyBase {
    option1?: StorageProjectsServiceAccountGetSecurityOption1;
    option2?: StorageProjectsServiceAccountGetSecurityOption2;
    option3?: StorageProjectsServiceAccountGetSecurityOption3;
    option4?: StorageProjectsServiceAccountGetSecurityOption4;
    option5?: StorageProjectsServiceAccountGetSecurityOption5;
}
export declare class StorageProjectsServiceAccountGetRequest extends SpeakeasyBase {
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
     * Project ID
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
export declare class StorageProjectsServiceAccountGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    serviceAccount?: shared.ServiceAccount;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
