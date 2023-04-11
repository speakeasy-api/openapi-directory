import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Aquifers {
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
    aquifersFilesList(req: operations.AquifersFilesListRequest, config?: AxiosRequestConfig): Promise<operations.AquifersFilesListResponse>;
    /**
     * return a list of aquifers
     */
    aquifersList(req: operations.AquifersListRequest, config?: AxiosRequestConfig): Promise<operations.AquifersListResponse>;
    /**
     * List all aquifers in a simplified format
     */
    aquifersNamesList(req: operations.AquifersNamesListRequest, config?: AxiosRequestConfig): Promise<operations.AquifersNamesListResponse>;
    /**
     * return details of aquifers
     */
    aquifersRead(req: operations.AquifersReadRequest, config?: AxiosRequestConfig): Promise<operations.AquifersReadResponse>;
}
