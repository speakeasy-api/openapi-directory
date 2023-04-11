import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Drillers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * list files found for the aquifer identified in the uri
     */
    drillersFilesList(req: operations.DrillersFilesListRequest, config?: AxiosRequestConfig): Promise<operations.DrillersFilesListResponse>;
    /**
     * Returns a list of all person records
     */
    drillersList(req: operations.DrillersListRequest, config?: AxiosRequestConfig): Promise<operations.DrillersListResponse>;
    /**
     * Search for a person in the Register
     */
    drillersNamesList(req: operations.DrillersNamesListRequest, config?: AxiosRequestConfig): Promise<operations.DrillersNamesListResponse>;
}
