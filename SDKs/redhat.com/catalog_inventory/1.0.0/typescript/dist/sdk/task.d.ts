import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Task {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List Tasks
     *
     * @remarks
     * Returns an array of Task objects
     */
    listTasks(req: operations.ListTasksRequest, config?: AxiosRequestConfig): Promise<operations.ListTasksResponse>;
    /**
     * Show an existing Task
     *
     * @remarks
     * Returns a Task object
     */
    showTask(req: operations.ShowTaskRequest, config?: AxiosRequestConfig): Promise<operations.ShowTaskResponse>;
    /**
     * Update an existing Task
     *
     * @remarks
     * Updates a Task object
     */
    updateTask(req: operations.UpdateTaskRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTaskResponse>;
}
