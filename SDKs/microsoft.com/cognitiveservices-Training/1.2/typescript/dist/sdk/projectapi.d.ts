import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ProjectApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a project
     */
    createProject(req: operations.CreateProjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectResponse>;
    /**
     * Delete a specific iteration of a project
     */
    deleteIteration(req: operations.DeleteIterationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIterationResponse>;
    /**
     * Delete a specific project
     */
    deleteProject(req: operations.DeleteProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectResponse>;
    /**
     * Export a trained iteration
     */
    exportIteration(req: operations.ExportIterationRequest, config?: AxiosRequestConfig): Promise<operations.ExportIterationResponse>;
    /**
     * Get the list of exports for a specific iteration
     */
    getExports(req: operations.GetExportsRequest, config?: AxiosRequestConfig): Promise<operations.GetExportsResponse>;
    /**
     * Get a specific iteration
     */
    getIteration(req: operations.GetIterationRequest, config?: AxiosRequestConfig): Promise<operations.GetIterationResponse>;
    /**
     * Get detailed performance information about a trained iteration
     */
    getIterationPerformance(req: operations.GetIterationPerformanceRequest, config?: AxiosRequestConfig): Promise<operations.GetIterationPerformanceResponse>;
    /**
     * Get iterations for the project
     */
    getIterations(req: operations.GetIterationsRequest, config?: AxiosRequestConfig): Promise<operations.GetIterationsResponse>;
    /**
     * Get a specific project
     */
    getProject(req: operations.GetProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectResponse>;
    /**
     * Get your projects
     */
    getProjects(req: operations.GetProjectsRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectsResponse>;
    /**
     * Queues project for training
     */
    trainProject(req: operations.TrainProjectRequest, config?: AxiosRequestConfig): Promise<operations.TrainProjectResponse>;
    /**
     * Update a specific iteration
     */
    updateIterationForm(req: operations.UpdateIterationFormRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIterationFormResponse>;
    /**
     * Update a specific iteration
     */
    updateIterationJson(req: operations.UpdateIterationJsonRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIterationJsonResponse>;
    /**
     * Update a specific iteration
     */
    updateIterationRaw(req: operations.UpdateIterationRawRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIterationRawResponse>;
    /**
     * Update a specific project
     */
    updateProjectForm(req: operations.UpdateProjectFormRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectFormResponse>;
    /**
     * Update a specific project
     */
    updateProjectJson(req: operations.UpdateProjectJsonRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectJsonResponse>;
    /**
     * Update a specific project
     */
    updateProjectRaw(req: operations.UpdateProjectRawRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectRawResponse>;
}
