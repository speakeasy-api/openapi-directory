import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class V1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Decodes the integrity token and returns the token payload.
     */
    playintegrityDecodeIntegrityToken(req: operations.PlayintegrityDecodeIntegrityTokenRequest, security: operations.PlayintegrityDecodeIntegrityTokenSecurity, config?: AxiosRequestConfig): Promise<operations.PlayintegrityDecodeIntegrityTokenResponse>;
}
