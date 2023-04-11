import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Scans {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves all scans
     */
    getApiV1Scans(req: operations.GetApiV1ScansRequest, security: operations.GetApiV1ScansSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1ScansResponse>;
    /**
     * Retrieves a project scan result
     */
    getApiV1ScansId(req: operations.GetApiV1ScansIdRequest, security: operations.GetApiV1ScansIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1ScansIdResponse>;
    /**
     * Retrieves a file object, containing information about dependencies in the file
     */
    getApiV1ScansIdFilesFileId(req: operations.GetApiV1ScansIdFilesFileIdRequest, security: operations.GetApiV1ScansIdFilesFileIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetApiV1ScansIdFilesFileIdResponse>;
}
