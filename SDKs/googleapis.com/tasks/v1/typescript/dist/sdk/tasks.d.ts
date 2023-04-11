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
     * Clears all completed tasks from the specified task list. The affected tasks will be marked as 'hidden' and no longer be returned by default when retrieving all tasks for a task list.
     */
    tasksTasksClear(req: operations.TasksTasksClearRequest, security: operations.TasksTasksClearSecurity, config?: AxiosRequestConfig): Promise<operations.TasksTasksClearResponse>;
    /**
     * Deletes the specified task from the task list.
     */
    tasksTasksDelete(req: operations.TasksTasksDeleteRequest, security: operations.TasksTasksDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.TasksTasksDeleteResponse>;
    /**
     * Returns the specified task.
     */
    tasksTasksGet(req: operations.TasksTasksGetRequest, security: operations.TasksTasksGetSecurity, config?: AxiosRequestConfig): Promise<operations.TasksTasksGetResponse>;
    /**
     * Creates a new task on the specified task list.
     */
    tasksTasksInsert(req: operations.TasksTasksInsertRequest, security: operations.TasksTasksInsertSecurity, config?: AxiosRequestConfig): Promise<operations.TasksTasksInsertResponse>;
    /**
     * Returns all tasks in the specified task list.
     */
    tasksTasksList(req: operations.TasksTasksListRequest, security: operations.TasksTasksListSecurity, config?: AxiosRequestConfig): Promise<operations.TasksTasksListResponse>;
    /**
     * Moves the specified task to another position in the task list. This can include putting it as a child task under a new parent and/or move it to a different position among its sibling tasks.
     */
    tasksTasksMove(req: operations.TasksTasksMoveRequest, security: operations.TasksTasksMoveSecurity, config?: AxiosRequestConfig): Promise<operations.TasksTasksMoveResponse>;
    /**
     * Updates the specified task. This method supports patch semantics.
     */
    tasksTasksPatch(req: operations.TasksTasksPatchRequest, security: operations.TasksTasksPatchSecurity, config?: AxiosRequestConfig): Promise<operations.TasksTasksPatchResponse>;
    /**
     * Updates the specified task.
     */
    tasksTasksUpdate(req: operations.TasksTasksUpdateRequest, security: operations.TasksTasksUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.TasksTasksUpdateResponse>;
}
