import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Associationsessions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create an association session for initiating an association with an AdSense user.
     */
    adsensehostAssociationsessionsStart(req: operations.AdsensehostAssociationsessionsStartRequest, security: operations.AdsensehostAssociationsessionsStartSecurity, config?: AxiosRequestConfig): Promise<operations.AdsensehostAssociationsessionsStartResponse>;
    /**
     * Verify an association session after the association callback returns from AdSense signup.
     */
    adsensehostAssociationsessionsVerify(req: operations.AdsensehostAssociationsessionsVerifyRequest, security: operations.AdsensehostAssociationsessionsVerifySecurity, config?: AxiosRequestConfig): Promise<operations.AdsensehostAssociationsessionsVerifyResponse>;
}
