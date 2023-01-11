import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Changelog {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createChangelog - Create changelog
     *
     * Create a new changelog inside of this project
    **/
    createChangelog(req: operations.CreateChangelogRequest, config?: AxiosRequestConfig): Promise<operations.CreateChangelogResponse>;
    /**
     * deleteChangelog - Delete changelog
     *
     * Delete the changelog with this slug
    **/
    deleteChangelog(req: operations.DeleteChangelogRequest, config?: AxiosRequestConfig): Promise<operations.DeleteChangelogResponse>;
    /**
     * getChangelog - Get changelog
     *
     * Returns the changelog with this slug
    **/
    getChangelog(req: operations.GetChangelogRequest, config?: AxiosRequestConfig): Promise<operations.GetChangelogResponse>;
    /**
     * getChangelogs - Get changelogs
     *
     * Returns a list of changelogs associated with the project API key
    **/
    getChangelogs(req: operations.GetChangelogsRequest, config?: AxiosRequestConfig): Promise<operations.GetChangelogsResponse>;
    /**
     * updateChangelog - Update changelog
     *
     * Update a changelog with this slug
    **/
    updateChangelog(req: operations.UpdateChangelogRequest, config?: AxiosRequestConfig): Promise<operations.UpdateChangelogResponse>;
}
