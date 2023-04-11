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
     * CreateChallenge API
     */
    verifiedaccessChallengeCreate(req: operations.VerifiedaccessChallengeCreateRequest, security: operations.VerifiedaccessChallengeCreateSecurity, config?: AxiosRequestConfig): Promise<operations.VerifiedaccessChallengeCreateResponse>;
    /**
     * VerifyChallengeResponse API
     */
    verifiedaccessChallengeVerify(req: operations.VerifiedaccessChallengeVerifyRequest, security: operations.VerifiedaccessChallengeVerifySecurity, config?: AxiosRequestConfig): Promise<operations.VerifiedaccessChallengeVerifyResponse>;
}
