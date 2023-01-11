import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ProjectApi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createProject - Create a project.
    **/
    createProject(req: operations.CreateProjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectResponse>;
    /**
     * deleteIteration - Delete a specific iteration of a project.
    **/
    deleteIteration(req: operations.DeleteIterationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIterationResponse>;
    /**
     * deleteProject - Delete a specific project.
    **/
    deleteProject(req: operations.DeleteProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectResponse>;
    /**
     * exportIteration - Export a trained iteration.
    **/
    exportIteration(req: operations.ExportIterationRequest, config?: AxiosRequestConfig): Promise<operations.ExportIterationResponse>;
    /**
     * getExports - Get the list of exports for a specific iteration.
    **/
    getExports(req: operations.GetExportsRequest, config?: AxiosRequestConfig): Promise<operations.GetExportsResponse>;
    /**
     * getImagePerformanceCount - Gets the number of images tagged with the provided {tagIds} that have prediction results from
     * training for the provided iteration {iterationId}.
     *
     * The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
     * "Cat" tags, then only images tagged with Dog and/or Cat will be returned
    **/
    getImagePerformanceCount(req: operations.GetImagePerformanceCountRequest, config?: AxiosRequestConfig): Promise<operations.GetImagePerformanceCountResponse>;
    /**
     * getImagePerformances - Get image with its prediction for a given project iteration.
     *
     * This API supports batching and range selection. By default it will only return first 50 images matching images.
     * Use the {take} and {skip} parameters to control how many images to return in a given batch.
     * The filtering is on an and/or relationship. For example, if the provided tag ids are for the "Dog" and
     * "Cat" tags, then only images tagged with Dog and/or Cat will be returned
    **/
    getImagePerformances(req: operations.GetImagePerformancesRequest, config?: AxiosRequestConfig): Promise<operations.GetImagePerformancesResponse>;
    /**
     * getIteration - Get a specific iteration.
    **/
    getIteration(req: operations.GetIterationRequest, config?: AxiosRequestConfig): Promise<operations.GetIterationResponse>;
    /**
     * getIterationPerformance - Get detailed performance information about an iteration.
    **/
    getIterationPerformance(req: operations.GetIterationPerformanceRequest, config?: AxiosRequestConfig): Promise<operations.GetIterationPerformanceResponse>;
    /**
     * getIterations - Get iterations for the project.
    **/
    getIterations(req: operations.GetIterationsRequest, config?: AxiosRequestConfig): Promise<operations.GetIterationsResponse>;
    /**
     * getProject - Get a specific project.
    **/
    getProject(req: operations.GetProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectResponse>;
    /**
     * getProjects - Get your projects.
    **/
    getProjects(req: operations.GetProjectsRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectsResponse>;
    /**
     * publishIteration - Publish a specific iteration.
    **/
    publishIteration(req: operations.PublishIterationRequest, config?: AxiosRequestConfig): Promise<operations.PublishIterationResponse>;
    /**
     * trainProject - Queues project for training.
    **/
    trainProject(req: operations.TrainProjectRequest, config?: AxiosRequestConfig): Promise<operations.TrainProjectResponse>;
    /**
     * unpublishIteration - Unpublish a specific iteration.
    **/
    unpublishIteration(req: operations.UnpublishIterationRequest, config?: AxiosRequestConfig): Promise<operations.UnpublishIterationResponse>;
    /**
     * updateIteration - Update a specific iteration.
    **/
    updateIteration(req: operations.UpdateIterationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIterationResponse>;
    /**
     * updateProject - Update a specific project.
    **/
    updateProject(req: operations.UpdateProjectRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectResponse>;
}
