import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations to generate a token
 */
export declare class Generate {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Generate a token
     *
     * @remarks
     * Generates a new visitor identification token. This token will be unique every time this endpoint is called, even if called with the same email address. This token is temporary and will expire after 12 hours
     */
    postVisitorIdentificationV3TokensCreateGenerateToken(req: shared.IdentificationTokenGenerationRequest, security: operations.PostVisitorIdentificationV3TokensCreateGenerateTokenSecurity, config?: AxiosRequestConfig): Promise<operations.PostVisitorIdentificationV3TokensCreateGenerateTokenResponse>;
}
