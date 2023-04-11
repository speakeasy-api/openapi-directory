import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Archive {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Inserts a new mail into the archive of the Google group.
     */
    groupsmigrationArchiveInsert(req: operations.GroupsmigrationArchiveInsertRequest, security: operations.GroupsmigrationArchiveInsertSecurity, config?: AxiosRequestConfig): Promise<operations.GroupsmigrationArchiveInsertResponse>;
}
