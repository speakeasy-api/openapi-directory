import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Task {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * listTasks - List Tasks
     *
     * Returns an array of Task objects
    **/
    listTasks(req: operations.ListTasksRequest, config?: AxiosRequestConfig): Promise<operations.ListTasksResponse>;
    /**
     * showTask - Show an existing Task
     *
     * Returns a Task object
    **/
    showTask(req: operations.ShowTaskRequest, config?: AxiosRequestConfig): Promise<operations.ShowTaskResponse>;
    /**
     * updateTask - Update an existing Task
     *
     * Updates a Task object
    **/
    updateTask(req: operations.UpdateTaskRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTaskResponse>;
}
