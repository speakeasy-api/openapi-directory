import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudkmsProjectsLocationsEkmConnectionsCreateSecurity extends SpeakeasyBase {
    option1?: CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1;
    option2?: CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption2;
}
export declare class CloudkmsProjectsLocationsEkmConnectionsCreateRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    ekmConnectionInput?: shared.EkmConnectionInput;
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
     * Required. It must be unique within a location and match the regular expression `[a-zA-Z0-9_-]{1,63}`.
     */
    ekmConnectionId?: string;
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
     * Required. The resource name of the location associated with the EkmConnection, in the format `projects/* /locations/*`.
     */
    parent: string;
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
export declare class CloudkmsProjectsLocationsEkmConnectionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    ekmConnection?: shared.EkmConnection;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
