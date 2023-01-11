import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Sessions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getV05WellKnownOpenidConfiguration - Get openid configuration
    **/
    getV05WellKnownOpenidConfiguration(config?: AxiosRequestConfig): Promise<operations.GetV05WellKnownOpenidConfigurationResponse>;
    /**
     * getV05Certs - Get certs for JWT verification
    **/
    getV05Certs(config?: AxiosRequestConfig): Promise<operations.GetV05CertsResponse>;
    /**
     * postV05Sessions - Get access token
    **/
    postV05Sessions(req: operations.PostV05SessionsRequest, config?: AxiosRequestConfig): Promise<operations.PostV05SessionsResponse>;
}
