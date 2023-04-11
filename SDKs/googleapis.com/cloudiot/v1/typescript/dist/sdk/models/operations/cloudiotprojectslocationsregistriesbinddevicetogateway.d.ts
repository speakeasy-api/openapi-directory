import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption2 extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurity extends SpeakeasyBase {
    option1?: CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption1;
    option2?: CloudiotProjectsLocationsRegistriesBindDeviceToGatewaySecurityOption2;
}
export declare class CloudiotProjectsLocationsRegistriesBindDeviceToGatewayRequest extends SpeakeasyBase {
    /**
     * V1 error format.
     */
    dollarXgafv?: shared.XgafvEnum;
    bindDeviceToGatewayRequest?: shared.BindDeviceToGatewayRequest;
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
     * Required. The name of the registry. For example, `projects/example-project/locations/us-central1/registries/my-registry`.
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
export declare class CloudiotProjectsLocationsRegistriesBindDeviceToGatewayResponse extends SpeakeasyBase {
    /**
     * Successful response
     */
    bindDeviceToGatewayResponse?: Record<string, any>;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
