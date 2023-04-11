import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Tasks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Cancel tasks
     *
     * @remarks
     * Cancel tasks
     */
    cancelTasks(req: operations.CancelTasksRequest, config?: AxiosRequestConfig): Promise<operations.CancelTasksResponse>;
    /**
     * Delete tasks
     *
     * @remarks
     * Delete tasks
     */
    deleteTasks(req: operations.DeleteTasksRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTasksResponse>;
    /**
     * Get all tasks
     *
     * @remarks
     * Get all tasks
     */
    getAllTasks(req: operations.GetAllTasksRequest, config?: AxiosRequestConfig): Promise<operations.GetAllTasksResponse>;
    /**
     * Get one task
     *
     * @remarks
     * Get one task
     */
    getOneTask(config?: AxiosRequestConfig): Promise<operations.GetOneTaskResponse>;
}
