import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ProjectStatus {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List the project status
     *
     * @remarks
     * List the project status
     */
    getProjectStatus(req: operations.GetProjectStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectStatusResponse>;
    /**
     * List the project status of client
     *
     * @remarks
     * List the project status of client
     */
    getProjectStatusOfClient(req: operations.GetProjectStatusOfClientRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectStatusOfClientResponse>;
}
