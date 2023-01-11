import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Version {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createVersion - Create version
     *
     * Create a new version
    **/
    createVersion(req: operations.CreateVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateVersionResponse>;
    /**
     * deleteVersion - Delete version
     *
     * Delete a version
    **/
    deleteVersion(req: operations.DeleteVersionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVersionResponse>;
    /**
     * getVersion - Get version
     *
     * Returns the version with this version ID
    **/
    getVersion(req: operations.GetVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetVersionResponse>;
    /**
     * getVersions - Get versions
     *
     * Retrieve a list of versions associated with a project API key
    **/
    getVersions(req: operations.GetVersionsRequest, config?: AxiosRequestConfig): Promise<operations.GetVersionsResponse>;
    /**
     * updateVersion - Update version
     *
     * Update an existing version
    **/
    updateVersion(req: operations.UpdateVersionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateVersionResponse>;
}
