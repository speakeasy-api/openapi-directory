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
     * Create a project.
     */
    createProject(req: operations.CreateProjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectResponse>;
    /**
     * Delete a specific iteration of a project.
     */
    deleteIteration(req: operations.DeleteIterationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIterationResponse>;
    /**
     * Delete a specific project.
     */
    deleteProject(req: operations.DeleteProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectResponse>;
    /**
     * Export a trained iteration.
     */
    exportIteration(req: operations.ExportIterationRequest, config?: AxiosRequestConfig): Promise<operations.ExportIterationResponse>;
    /**
     * Exports a project.
     */
    exportProject(req: operations.ExportProjectRequest, config?: AxiosRequestConfig): Promise<operations.ExportProjectResponse>;
    /**
     * Get the list of exports for a specific iteration.
     */
    getExports(req: operations.GetExportsRequest, config?: AxiosRequestConfig): Promise<operations.GetExportsResponse>;
    /**
     * Gets the number of images tagged with the provided {tagIds} that have prediction results from
     * training for the provided iteration {iterationId}.
     *
     * @remarks
     * The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
     * "Cat" tags, then only images tagged with Dog and/or Cat will be returned
     */
    getImagePerformanceCount(req: operations.GetImagePerformanceCountRequest, config?: AxiosRequestConfig): Promise<operations.GetImagePerformanceCountResponse>;
    /**
     * Get image with its prediction for a given project iteration.
     *
     * @remarks
     * This API supports batching and range selection. By default it will only return first 50 images matching images.
     * Use the {take} and {skip} parameters to control how many images to return in a given batch.
     * The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
     * "Cat" tags, then only images tagged with Dog and/or Cat will be returned
     */
    getImagePerformances(req: operations.GetImagePerformancesRequest, config?: AxiosRequestConfig): Promise<operations.GetImagePerformancesResponse>;
    /**
     * Get a specific iteration.
     */
    getIteration(req: operations.GetIterationRequest, config?: AxiosRequestConfig): Promise<operations.GetIterationResponse>;
    /**
     * Get detailed performance information about an iteration.
     */
    getIterationPerformance(req: operations.GetIterationPerformanceRequest, config?: AxiosRequestConfig): Promise<operations.GetIterationPerformanceResponse>;
    /**
     * Get iterations for the project.
     */
    getIterations(req: operations.GetIterationsRequest, config?: AxiosRequestConfig): Promise<operations.GetIterationsResponse>;
    /**
     * Get a specific project.
     */
    getProject(req: operations.GetProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectResponse>;
    /**
     * Get your projects.
     */
    getProjects(config?: AxiosRequestConfig): Promise<operations.GetProjectsResponse>;
    /**
     * Imports a project.
     */
    importProject(req: operations.ImportProjectRequest, config?: AxiosRequestConfig): Promise<operations.ImportProjectResponse>;
    /**
     * Publish a specific iteration.
     */
    publishIteration(req: operations.PublishIterationRequest, config?: AxiosRequestConfig): Promise<operations.PublishIterationResponse>;
    /**
     * Queues project for training.
     */
    trainProjectForm(req: operations.TrainProjectFormRequest, config?: AxiosRequestConfig): Promise<operations.TrainProjectFormResponse>;
    /**
     * Queues project for training.
     */
    trainProjectJson(req: operations.TrainProjectJsonRequest, config?: AxiosRequestConfig): Promise<operations.TrainProjectJsonResponse>;
    /**
     * Queues project for training.
     */
    trainProjectRaw(req: operations.TrainProjectRawRequest, config?: AxiosRequestConfig): Promise<operations.TrainProjectRawResponse>;
    /**
     * Unpublish a specific iteration.
     */
    unpublishIteration(req: operations.UnpublishIterationRequest, config?: AxiosRequestConfig): Promise<operations.UnpublishIterationResponse>;
    /**
     * Update a specific iteration.
     */
    updateIterationForm(req: operations.UpdateIterationFormRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIterationFormResponse>;
    /**
     * Update a specific iteration.
     */
    updateIterationJson(req: operations.UpdateIterationJsonRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIterationJsonResponse>;
    /**
     * Update a specific iteration.
     */
    updateIterationRaw(req: operations.UpdateIterationRawRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIterationRawResponse>;
    /**
     * Update a specific project.
     */
    updateProjectForm(req: operations.UpdateProjectFormRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectFormResponse>;
    /**
     * Update a specific project.
     */
    updateProjectJson(req: operations.UpdateProjectJsonRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectJsonResponse>;
    /**
     * Update a specific project.
     */
    updateProjectRaw(req: operations.UpdateProjectRawRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectRawResponse>;
}
