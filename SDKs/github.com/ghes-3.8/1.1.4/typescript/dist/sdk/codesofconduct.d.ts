import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Insight into codes of conduct for your communities.
 */
export declare class CodesOfConduct {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get all codes of conduct
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/codes-of-conduct#get-all-codes-of-conduct} - API method documentation
     */
    codesOfConductGetAllCodesOfConduct(config?: AxiosRequestConfig): Promise<operations.CodesOfConductGetAllCodesOfConductResponse>;
    /**
     * Get a code of conduct
     *
     * @see {@link https://docs.github.com/enterprise-server@3.8/rest/reference/codes-of-conduct#get-a-code-of-conduct} - API method documentation
     */
    codesOfConductGetConductCode(req: operations.CodesOfConductGetConductCodeRequest, config?: AxiosRequestConfig): Promise<operations.CodesOfConductGetConductCodeResponse>;
}
