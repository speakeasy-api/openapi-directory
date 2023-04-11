import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Changelog {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create changelog
     *
     * @remarks
     * Create a new changelog inside of this project
     */
    createChangelog(req: shared.Changelog, security: operations.CreateChangelogSecurity, config?: AxiosRequestConfig): Promise<operations.CreateChangelogResponse>;
    /**
     * Delete changelog
     *
     * @remarks
     * Delete the changelog with this slug
     */
    deleteChangelog(req: operations.DeleteChangelogRequest, security: operations.DeleteChangelogSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteChangelogResponse>;
    /**
     * Get changelog
     *
     * @remarks
     * Returns the changelog with this slug
     */
    getChangelog(req: operations.GetChangelogRequest, security: operations.GetChangelogSecurity, config?: AxiosRequestConfig): Promise<operations.GetChangelogResponse>;
    /**
     * Get changelogs
     *
     * @remarks
     * Returns a list of changelogs associated with the project API key
     */
    getChangelogs(req: operations.GetChangelogsRequest, security: operations.GetChangelogsSecurity, config?: AxiosRequestConfig): Promise<operations.GetChangelogsResponse>;
    /**
     * Update changelog
     *
     * @remarks
     * Update a changelog with this slug
     */
    updateChangelog(req: operations.UpdateChangelogRequest, security: operations.UpdateChangelogSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateChangelogResponse>;
}
