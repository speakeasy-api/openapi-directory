import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Version {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create version
     *
     * @remarks
     * Create a new version
     */
    createVersion(req: shared.Version, security: operations.CreateVersionSecurity, config?: AxiosRequestConfig): Promise<operations.CreateVersionResponse>;
    /**
     * Delete version
     *
     * @remarks
     * Delete a version
     */
    deleteVersion(req: operations.DeleteVersionRequest, security: operations.DeleteVersionSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteVersionResponse>;
    /**
     * Get version
     *
     * @remarks
     * Returns the version with this version ID
     */
    getVersion(req: operations.GetVersionRequest, security: operations.GetVersionSecurity, config?: AxiosRequestConfig): Promise<operations.GetVersionResponse>;
    /**
     * Get versions
     *
     * @remarks
     * Retrieve a list of versions associated with a project API key
     */
    getVersions(config?: AxiosRequestConfig): Promise<operations.GetVersionsResponse>;
    /**
     * Update version
     *
     * @remarks
     * Update an existing version
     */
    updateVersion(req: operations.UpdateVersionRequest, security: operations.UpdateVersionSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateVersionResponse>;
}
