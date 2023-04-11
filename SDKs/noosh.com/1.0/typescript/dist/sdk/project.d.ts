import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Project {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Attach children projects to specific Project
     *
     * @remarks
     * Attach children projects to specific Project
     */
    attachProjectJson(req: operations.AttachProjectJsonRequest, config?: AxiosRequestConfig): Promise<operations.AttachProjectJsonResponse>;
    /**
     * Attach children projects to specific Project
     *
     * @remarks
     * Attach children projects to specific Project
     */
    attachProjectRaw(req: operations.AttachProjectRawRequest, config?: AxiosRequestConfig): Promise<operations.AttachProjectRawResponse>;
    /**
     * Archieve a specific Project
     *
     * @remarks
     * Archieve a specific Project
     */
    deleteProject(req: operations.DeleteProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectResponse>;
    /**
     * Get a specific Project
     *
     * @remarks
     * Get a specific Project
     */
    getProject(req: operations.GetProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectResponse>;
    /**
     * List the projects
     *
     * @remarks
     * List the projects
     */
    getProjectList(req: operations.GetProjectListRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectListResponse>;
    /**
     * Patch a specific Project
     *
     * @remarks
     * Patch a specific Project
     */
    patchProjectJson(req: operations.PatchProjectJsonRequest, config?: AxiosRequestConfig): Promise<operations.PatchProjectJsonResponse>;
    /**
     * Patch a specific Project
     *
     * @remarks
     * Patch a specific Project
     */
    patchProjectRaw(req: operations.PatchProjectRawRequest, config?: AxiosRequestConfig): Promise<operations.PatchProjectRawResponse>;
    /**
     * Create a Project
     *
     * @remarks
     * Create a Project
     */
    postProjectJson(req: operations.PostProjectJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostProjectJsonResponse>;
    /**
     * Create a Project
     *
     * @remarks
     * Create a Project
     */
    postProjectRaw(req: operations.PostProjectRawRequest, config?: AxiosRequestConfig): Promise<operations.PostProjectRawResponse>;
    /**
     * Update a specific Project
     *
     * @remarks
     * Update a specific Project
     */
    putProjectJson(req: operations.PutProjectJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutProjectJsonResponse>;
    /**
     * Update a specific Project
     *
     * @remarks
     * Update a specific Project
     */
    putProjectRaw(req: operations.PutProjectRawRequest, config?: AxiosRequestConfig): Promise<operations.PutProjectRawResponse>;
}
