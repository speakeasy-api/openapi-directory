import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FirebaseappdistributionProjectsTestersBatchRemoveSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class FirebaseappdistributionProjectsTestersBatchRemoveRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    googleFirebaseAppdistroV1BatchRemoveTestersRequest?: shared.GoogleFirebaseAppdistroV1BatchRemoveTestersRequest;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * JSONP
     */
    callback?: string;
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
     * Required. The name of the project resource. Format: `projects/{project_number}`
     */
    project: string;
    /**
     * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
     */
    quotaUser?: string;
    /**
     * Legacy upload protocol for media (e.g. "media", "multipart").
     */
    uploadType?: string;
    /**
     * Upload protocol for media (e.g. "raw", "multipart").
     */
    uploadProtocol?: string;
}
export declare class FirebaseappdistributionProjectsTestersBatchRemoveResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    googleFirebaseAppdistroV1BatchRemoveTestersResponse?: shared.GoogleFirebaseAppdistroV1BatchRemoveTestersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
