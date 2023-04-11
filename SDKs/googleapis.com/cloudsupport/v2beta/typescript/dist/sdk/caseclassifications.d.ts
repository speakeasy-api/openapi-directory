import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CaseClassifications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve valid classifications to be used when creating a support case. The classications are hierarchical, with each classification containing all levels of the hierarchy, separated by " > ". For example "Technical Issue > Compute > Compute Engine".
     */
    cloudsupportCaseClassificationsSearch(req: operations.CloudsupportCaseClassificationsSearchRequest, security: operations.CloudsupportCaseClassificationsSearchSecurity, config?: AxiosRequestConfig): Promise<operations.CloudsupportCaseClassificationsSearchResponse>;
}
