import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Authentication operations
 */
export declare class Oauth {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create an oauth token
     *
     * @remarks
     * Create an OAuth 2.0 Bearer token. A valid bearer token is required for all other API requests.
     *
     * Be sure to set the header `Content-Type: "application/vnd.api+json"`. Otherwise, you will get an error
     * 403 Forbidden. Using `Content-Type: "application/json"` is permitted (to support older oauth clients) but when
     * using `application/json` the body should have a body in the following format instead of nesting under
     * `data.attributes`:
     * ```
     * {
     *   "grant_type": "client_credentials",
     *   "client_id": "95c78ab2-167f-40b8-8bec-8398d4b87454",
     *   "client_secret": "35d18dc9-a3dd-4948-b787-063a490b9354"
     * }
     * ```
     *
     */
    createToken(req: operations.CreateTokenRequest, security: operations.CreateTokenSecurity, config?: AxiosRequestConfig): Promise<operations.CreateTokenResponse>;
    /**
     * Get the groups for a token
     *
     * @remarks
     * Get the list of groups a token can be used to access.
     */
    fetchTokenGroups(req: operations.FetchTokenGroupsRequest, security: operations.FetchTokenGroupsSecurity, config?: AxiosRequestConfig): Promise<operations.FetchTokenGroupsResponse>;
    /**
     * Get the organization for a token
     *
     * @remarks
     * Get the organization a token can be used to access.
     */
    fetchTokenOrganization(req: operations.FetchTokenOrganizationRequest, config?: AxiosRequestConfig): Promise<operations.FetchTokenOrganizationResponse>;
}
