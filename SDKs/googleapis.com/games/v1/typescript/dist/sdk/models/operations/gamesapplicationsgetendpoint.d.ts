import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GamesApplicationsGetEndPointSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
/**
 * Type of endpoint being requested.
 */
export declare enum GamesApplicationsGetEndPointEndPointTypeEnum {
    EndPointTypeUnspecified = "END_POINT_TYPE_UNSPECIFIED",
    ProfileCreation = "PROFILE_CREATION",
    ProfileSettings = "PROFILE_SETTINGS"
}
export declare class GamesApplicationsGetEndPointRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    /**
     * OAuth access token.
     */
    accessToken?: string;
    /**
     * Data format for response.
     */
    alt?: shared.AltEnum;
    /**
     * The application ID from the Google Play developer console.
     */
    applicationId?: string;
    /**
     * JSONP
     */
    callback?: string;
    /**
     * Type of endpoint being requested.
     */
    endPointType?: GamesApplicationsGetEndPointEndPointTypeEnum;
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
export declare class GamesApplicationsGetEndPointResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    endPoint?: shared.EndPoint;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
