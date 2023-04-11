import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Files {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves a report file by its report ID and file ID. This method supports media download.
     */
    dfareportingFilesGet(req: operations.DfareportingFilesGetRequest, security: operations.DfareportingFilesGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingFilesGetResponse>;
    /**
     * Lists files for a user profile.
     */
    dfareportingFilesList(req: operations.DfareportingFilesListRequest, security: operations.DfareportingFilesListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingFilesListResponse>;
}
