import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Contributor {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getContributor - Contributor Detail
     *
     * Return the content of the selected contributor.
    **/
    getContributor(req: operations.GetContributorRequest, config?: AxiosRequestConfig): Promise<operations.GetContributorResponse>;
    /**
     * listContributor - Contributor Collection
     *
     * Return a collection of Contributors.
    **/
    listContributor(req: operations.ListContributorRequest, config?: AxiosRequestConfig): Promise<operations.ListContributorResponse>;
}
