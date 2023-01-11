import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Import {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getLatestImportStatus - Gets status for latest import
    **/
    getLatestImportStatus(req: operations.GetLatestImportStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetLatestImportStatusResponse>;
    /**
     * getStatusByUuid - Gets status for an import
    **/
    getStatusByUuid(req: operations.GetStatusByUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetStatusByUuidResponse>;
    /**
     * importLibraryV2 - Bulk import library items
    **/
    importLibraryV2(req: operations.ImportLibraryV2Request, config?: AxiosRequestConfig): Promise<operations.ImportLibraryV2Response>;
}
