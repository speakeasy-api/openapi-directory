import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Structures {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSingleStructureStructuresEntryIdGet - Get Single Structure
    **/
    getSingleStructureStructuresEntryIdGet(req: operations.GetSingleStructureStructuresEntryIdGetRequest, config?: AxiosRequestConfig): Promise<operations.GetSingleStructureStructuresEntryIdGetResponse>;
    /**
     * getStructuresStructuresGet - Get Structures
    **/
    getStructuresStructuresGet(req: operations.GetStructuresStructuresGetRequest, config?: AxiosRequestConfig): Promise<operations.GetStructuresStructuresGetResponse>;
}
