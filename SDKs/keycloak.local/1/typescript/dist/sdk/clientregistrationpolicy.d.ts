import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ClientRegistrationPolicy {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Base path for retrieve providers with the configProperties properly filled
     */
    getRealmClientRegistrationPolicyProviders(req: operations.GetRealmClientRegistrationPolicyProvidersRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientRegistrationPolicyProvidersResponse>;
}
