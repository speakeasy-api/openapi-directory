import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Everything about Otoroshi import/export
 */
export declare class Import {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Export the full state of Otoroshi
     *
     * @remarks
     * Export the full state of Otoroshi
     */
    fullExport(config?: AxiosRequestConfig): Promise<operations.FullExportResponse>;
    /**
     * Import the full state of Otoroshi
     *
     * @remarks
     * Import the full state of Otoroshi
     */
    fullImport(req: shared.ImportExport, security: operations.FullImportSecurity, config?: AxiosRequestConfig): Promise<operations.FullImportResponse>;
    /**
     * Import the full state of Otoroshi as a file
     *
     * @remarks
     * Import the full state of Otoroshi as a file
     */
    fullImportFromFile(req: shared.ImportExport, security: operations.FullImportFromFileSecurity, config?: AxiosRequestConfig): Promise<operations.FullImportFromFileResponse>;
}
