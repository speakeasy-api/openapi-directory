import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Imports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create import
     *
     * @remarks
     * Creates a new import
     */
    createImport(req: shared.CreateImportRequest, config?: AxiosRequestConfig): Promise<operations.CreateImportResponse>;
    /**
     * Create import URL
     *
     * @remarks
     * Creates a new import URL
     */
    createImportURL(req: shared.CreateImportURLRequest, config?: AxiosRequestConfig): Promise<operations.CreateImportURLResponse>;
    /**
     * Get import
     *
     * @remarks
     * Gets an import
     */
    listImports(config?: AxiosRequestConfig): Promise<operations.ListImportsResponse>;
}
