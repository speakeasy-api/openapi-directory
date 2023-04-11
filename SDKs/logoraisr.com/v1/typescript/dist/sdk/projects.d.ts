import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a new project.
     *
     * @remarks
     * This POST-Method creates a new project.
     */
    projectsCreate(req: shared.ProjectRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsCreateResponse>;
    /**
     * Get user project list.
     *
     * @remarks
     * This GET-Method lists the user's projects.
     */
    projectsList(config?: AxiosRequestConfig): Promise<operations.ProjectsListResponse>;
    /**
     * Get project details.
     *
     * @remarks
     * This GET-Method returns a specific project.
     */
    projectsRead(req: operations.ProjectsReadRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsReadResponse>;
}
