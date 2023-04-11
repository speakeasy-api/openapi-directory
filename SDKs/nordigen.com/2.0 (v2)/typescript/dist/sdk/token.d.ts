import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Token {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Obtain JWT pair
     */
    jwtObtain(req: shared.JWTObtainPairRequest, config?: AxiosRequestConfig): Promise<operations.JWTObtainResponse>;
    /**
     * Refresh access token
     */
    jwtRefresh(req: shared.JWTRefreshRequest, config?: AxiosRequestConfig): Promise<operations.JWTRefreshResponse>;
}
