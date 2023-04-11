import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ViolatingSites {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Lists sites that are failing in the Abusive Experience Report.
     */
    abusiveexperiencereportViolatingSitesList(req: operations.AbusiveexperiencereportViolatingSitesListRequest, config?: AxiosRequestConfig): Promise<operations.AbusiveexperiencereportViolatingSitesListResponse>;
}
