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
     * createProject - Create a project
    **/
    createProject(req: operations.CreateProjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectResponse>;
    /**
     * deleteIteration - Delete a specific iteration of a project
    **/
    deleteIteration(req: operations.DeleteIterationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIterationResponse>;
    /**
     * deleteProject - Delete a specific project
    **/
    deleteProject(req: operations.DeleteProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectResponse>;
    /**
     * exportIteration - Export a trained iteration
    **/
    exportIteration(req: operations.ExportIterationRequest, config?: AxiosRequestConfig): Promise<operations.ExportIterationResponse>;
    /**
     * getExports - Get the list of exports for a specific iteration
    **/
    getExports(req: operations.GetExportsRequest, config?: AxiosRequestConfig): Promise<operations.GetExportsResponse>;
    /**
     * getIteration - Get a specific iteration
    **/
    getIteration(req: operations.GetIterationRequest, config?: AxiosRequestConfig): Promise<operations.GetIterationResponse>;
    /**
     * getIterationPerformance - Get detailed performance information about a trained iteration
    **/
    getIterationPerformance(req: operations.GetIterationPerformanceRequest, config?: AxiosRequestConfig): Promise<operations.GetIterationPerformanceResponse>;
    /**
     * getIterations - Get iterations for the project
    **/
    getIterations(req: operations.GetIterationsRequest, config?: AxiosRequestConfig): Promise<operations.GetIterationsResponse>;
    /**
     * getProject - Get a specific project
    **/
    getProject(req: operations.GetProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectResponse>;
    /**
     * getProjects - Get your projects
    **/
    getProjects(req: operations.GetProjectsRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectsResponse>;
    /**
     * trainProject - Queues project for training
    **/
    trainProject(req: operations.TrainProjectRequest, config?: AxiosRequestConfig): Promise<operations.TrainProjectResponse>;
    /**
     * updateIteration - Update a specific iteration
    **/
    updateIteration(req: operations.UpdateIterationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateIterationResponse>;
    /**
     * updateProject - Update a specific project
    **/
    updateProject(req: operations.UpdateProjectRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectResponse>;
}
