import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Locations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns a list of the sensitive information types that DLP API supports. See https://cloud.google.com/dlp/docs/infotypes-reference to learn more.
     */
    dlpLocationsInfoTypesList(req: operations.DlpLocationsInfoTypesListRequest, security: operations.DlpLocationsInfoTypesListSecurity, config?: AxiosRequestConfig): Promise<operations.DlpLocationsInfoTypesListResponse>;
}
