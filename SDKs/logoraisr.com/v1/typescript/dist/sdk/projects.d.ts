import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * projectsCreate - Create a new project.
     *
     * This POST-Method creates a new project.
    **/
    projectsCreate(req: operations.ProjectsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsCreateResponse>;
    /**
     * projectsList - Get user project list.
     *
     * This GET-Method lists the user's projects.
    **/
    projectsList(config?: AxiosRequestConfig): Promise<operations.ProjectsListResponse>;
    /**
     * projectsRead - Get project details.
     *
     * This GET-Method returns a specific project.
    **/
    projectsRead(req: operations.ProjectsReadRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsReadResponse>;
}
