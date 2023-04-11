import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Contributor {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Contributor Detail
     *
     * @remarks
     * Return the content of the selected contributor.
     */
    getContributor(req: operations.GetContributorRequest, security: operations.GetContributorSecurity, config?: AxiosRequestConfig): Promise<operations.GetContributorResponse>;
    /**
     * Contributor Collection
     *
     * @remarks
     * Return a collection of Contributors.
     */
    listContributor(req: operations.ListContributorRequest, security: operations.ListContributorSecurity, config?: AxiosRequestConfig): Promise<operations.ListContributorResponse>;
}
