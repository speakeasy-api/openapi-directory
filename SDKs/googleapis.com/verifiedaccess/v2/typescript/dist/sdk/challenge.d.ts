import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Challenge {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Generates a new challenge.
     */
    verifiedaccessChallengeGenerate(req: operations.VerifiedaccessChallengeGenerateRequest, security: operations.VerifiedaccessChallengeGenerateSecurity, config?: AxiosRequestConfig): Promise<operations.VerifiedaccessChallengeGenerateResponse>;
    /**
     * Verifies the challenge response.
     */
    verifiedaccessChallengeVerify(req: operations.VerifiedaccessChallengeVerifyRequest, security: operations.VerifiedaccessChallengeVerifySecurity, config?: AxiosRequestConfig): Promise<operations.VerifiedaccessChallengeVerifyResponse>;
}
