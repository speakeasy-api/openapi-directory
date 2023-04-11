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
     * Get default task priority list
     *
     * @remarks
     * Get default task priority list
     */
    taskPriorityList(req: operations.TaskPriorityListRequest, config?: AxiosRequestConfig): Promise<operations.TaskPriorityListResponse>;
    /**
     * Get custom task types of workgroup level
     *
     * @remarks
     * Get custom task types of workgroup level
     */
    getCustomTaskTypesOfWg(req: operations.GetCustomTaskTypesOfWgRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomTaskTypesOfWgResponse>;
    /**
     * Get default task status list
     *
     * @remarks
     * Get default task status list
     */
    getDefaultTaskStatusList(req: operations.GetDefaultTaskStatusListRequest, config?: AxiosRequestConfig): Promise<operations.GetDefaultTaskStatusListResponse>;
    /**
     * Get task list of project level
     *
     * @remarks
     * Get task list of project level
     */
    getTaskListOfProject(req: operations.GetTaskListOfProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetTaskListOfProjectResponse>;
    /**
     * Get task list of workgroup level
     *
     * @remarks
     * Get task list of workgroup level
     */
    getTaskListOfWorkgroup(req: operations.GetTaskListOfWorkgroupRequest, config?: AxiosRequestConfig): Promise<operations.GetTaskListOfWorkgroupResponse>;
    /**
     * Get a sepcific task of project level
     *
     * @remarks
     * Get a sepcific task of project level
     */
    getTaskOfProject(req: operations.GetTaskOfProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetTaskOfProjectResponse>;
    /**
     * Get a sepcific task of workgroup level
     *
     * @remarks
     * Get a sepcific task of workgroup level
     */
    getTaskOfWorkgroup(req: operations.GetTaskOfWorkgroupRequest, config?: AxiosRequestConfig): Promise<operations.GetTaskOfWorkgroupResponse>;
    /**
     * Get task types of workgroup level
     *
     * @remarks
     * Get task types of workgroup level
     */
    getTaskTypesOfWorkgroup(req: operations.GetTaskTypesOfWorkgroupRequest, config?: AxiosRequestConfig): Promise<operations.GetTaskTypesOfWorkgroupResponse>;
    /**
     * Get custom task status of workgroup level
     *
     * @remarks
     * Get custom task status of workgroup level
     */
    getWgTaskStatusListOfWorkgroup(req: operations.GetWgTaskStatusListOfWorkgroupRequest, config?: AxiosRequestConfig): Promise<operations.GetWgTaskStatusListOfWorkgroupResponse>;
    /**
     * Create a new task
     *
     * @remarks
     * Create a new task
     */
    postTaskForProjectJson(req: operations.PostTaskForProjectJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostTaskForProjectJsonResponse>;
    /**
     * Create a new task
     *
     * @remarks
     * Create a new task
     */
    postTaskForProjectRaw(req: operations.PostTaskForProjectRawRequest, config?: AxiosRequestConfig): Promise<operations.PostTaskForProjectRawResponse>;
}
