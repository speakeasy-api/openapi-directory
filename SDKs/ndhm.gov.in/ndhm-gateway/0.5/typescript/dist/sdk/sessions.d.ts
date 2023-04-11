import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Sessions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get openid configuration
     */
    getV05WellKnownOpenidConfiguration(config?: AxiosRequestConfig): Promise<operations.GetV05WellKnownOpenidConfigurationResponse>;
    /**
     * Get certs for JWT verification
     */
    getV05Certs(config?: AxiosRequestConfig): Promise<operations.GetV05CertsResponse>;
    /**
     * Get access token
     */
    postV05SessionsJson(req: shared.SessionRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SessionsJsonResponse>;
    /**
     * Get access token
     */
    postV05SessionsRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.PostV05SessionsRawResponse>;
}
