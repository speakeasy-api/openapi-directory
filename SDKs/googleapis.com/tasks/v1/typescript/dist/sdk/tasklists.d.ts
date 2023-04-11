import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Tasklists {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Deletes the authenticated user's specified task list.
     */
    tasksTasklistsDelete(req: operations.TasksTasklistsDeleteRequest, security: operations.TasksTasklistsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.TasksTasklistsDeleteResponse>;
    /**
     * Returns the authenticated user's specified task list.
     */
    tasksTasklistsGet(req: operations.TasksTasklistsGetRequest, security: operations.TasksTasklistsGetSecurity, config?: AxiosRequestConfig): Promise<operations.TasksTasklistsGetResponse>;
    /**
     * Creates a new task list and adds it to the authenticated user's task lists.
     */
    tasksTasklistsInsert(req: operations.TasksTasklistsInsertRequest, security: operations.TasksTasklistsInsertSecurity, config?: AxiosRequestConfig): Promise<operations.TasksTasklistsInsertResponse>;
    /**
     * Returns all the authenticated user's task lists.
     */
    tasksTasklistsList(req: operations.TasksTasklistsListRequest, security: operations.TasksTasklistsListSecurity, config?: AxiosRequestConfig): Promise<operations.TasksTasklistsListResponse>;
    /**
     * Updates the authenticated user's specified task list. This method supports patch semantics.
     */
    tasksTasklistsPatch(req: operations.TasksTasklistsPatchRequest, security: operations.TasksTasklistsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.TasksTasklistsPatchResponse>;
    /**
     * Updates the authenticated user's specified task list.
     */
    tasksTasklistsUpdate(req: operations.TasksTasklistsUpdateRequest, security: operations.TasksTasklistsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TasksTasklistsUpdateResponse>;
}
