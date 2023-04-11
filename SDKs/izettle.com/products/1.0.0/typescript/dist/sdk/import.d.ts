import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Import {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get status for latest import
     */
    getLatestImportStatus(req: operations.GetLatestImportStatusRequest, security: operations.GetLatestImportStatusSecurity, config?: AxiosRequestConfig): Promise<operations.GetLatestImportStatusResponse>;
    /**
     * Get status for an import
     */
    getStatusByUuid(req: operations.GetStatusByUuidRequest, security: operations.GetStatusByUuidSecurity, config?: AxiosRequestConfig): Promise<operations.GetStatusByUuidResponse>;
    /**
     * Import library items
     */
    importLibraryV2(req: operations.ImportLibraryV2Request, security: operations.ImportLibraryV2Security, config?: AxiosRequestConfig): Promise<operations.ImportLibraryV2Response>;
}
