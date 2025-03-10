import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DomainsProjectsLocationsRegistrationsRetrieveTransferParametersSecurity extends SpeakeasyBase {
    oauth2: string;
    oauth2c: string;
}
export declare class DomainsProjectsLocationsRegistrationsRetrieveTransferParametersRequest extends SpeakeasyBase {
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
     * JSONP
     */
    callback?: string;
    /**
     * Required. The domain name. Unicode domain names must be expressed in Punycode format.
     */
    domainName?: string;
    /**
     * Selector specifying which fields to include in a partial response.
     */
    fields?: string;
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Required. The location. Must be in the format `projects/* /locations/*`.
     */
    location: string;
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
export declare class DomainsProjectsLocationsRegistrationsRetrieveTransferParametersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful response
     */
    retrieveTransferParametersResponse?: shared.RetrieveTransferParametersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
