import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Tasks
 */
export declare class Tasks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List tasks
     *
     * @remarks
     * Fetches multiple task records. The records can be filtered, paged, and sorted according to
     * the respective parameters.
     *
     */
    getV2TasksJson(req: operations.GetV2TasksJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2TasksJsonResponse>;
    /**
     * Fetch a task
     *
     * @remarks
     * Fetches a task, by ID only.
     *
     */
    getV2TasksIdJson(req: operations.GetV2TasksIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2TasksIdJsonResponse>;
    /**
     * Create a Task
     *
     * @remarks
     * Creates a task.
     *
     */
    postV2TasksJson(req: operations.PostV2TasksJsonRequestBody, config?: AxiosRequestConfig): Promise<operations.PostV2TasksJsonResponse>;
    /**
     * Update a Task
     *
     * @remarks
     * Updates a task.
     *
     */
    putV2TasksIdJson(req: operations.PutV2TasksIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutV2TasksIdJsonResponse>;
}
