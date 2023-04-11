import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AcmeChallengeSets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets the ACME challenge set for a given domain name. Domain names must be provided in Punycode.
     */
    acmednsAcmeChallengeSetsGet(req: operations.AcmednsAcmeChallengeSetsGetRequest, config?: AxiosRequestConfig): Promise<operations.AcmednsAcmeChallengeSetsGetResponse>;
    /**
     * Rotate the ACME challenges for a given domain name. By default, removes any challenges that are older than 30 days. Domain names must be provided in Punycode.
     */
    acmednsAcmeChallengeSetsRotateChallenges(req: operations.AcmednsAcmeChallengeSetsRotateChallengesRequest, config?: AxiosRequestConfig): Promise<operations.AcmednsAcmeChallengeSetsRotateChallengesResponse>;
}
