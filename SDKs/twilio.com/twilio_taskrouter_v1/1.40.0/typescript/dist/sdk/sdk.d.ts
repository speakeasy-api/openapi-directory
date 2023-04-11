import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://taskrouter.twilio.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * This is the public Twilio REST API.
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    createActivity(req: operations.CreateActivityRequest, security: operations.CreateActivitySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateActivityResponse>;
    createTask(req: operations.CreateTaskRequest, security: operations.CreateTaskSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateTaskResponse>;
    createTaskChannel(req: operations.CreateTaskChannelRequest, security: operations.CreateTaskChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateTaskChannelResponse>;
    createTaskQueue(req: operations.CreateTaskQueueRequest, security: operations.CreateTaskQueueSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateTaskQueueResponse>;
    createWorker(req: operations.CreateWorkerRequest, security: operations.CreateWorkerSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateWorkerResponse>;
    createWorkflow(req: operations.CreateWorkflowRequest, security: operations.CreateWorkflowSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateWorkflowResponse>;
    createWorkspace(req: operations.CreateWorkspaceCreateWorkspaceRequest, security: operations.CreateWorkspaceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateWorkspaceResponse>;
    deleteActivity(req: operations.DeleteActivityRequest, security: operations.DeleteActivitySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteActivityResponse>;
    deleteTask(req: operations.DeleteTaskRequest, security: operations.DeleteTaskSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteTaskResponse>;
    deleteTaskChannel(req: operations.DeleteTaskChannelRequest, security: operations.DeleteTaskChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteTaskChannelResponse>;
    deleteTaskQueue(req: operations.DeleteTaskQueueRequest, security: operations.DeleteTaskQueueSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteTaskQueueResponse>;
    deleteWorker(req: operations.DeleteWorkerRequest, security: operations.DeleteWorkerSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteWorkerResponse>;
    deleteWorkflow(req: operations.DeleteWorkflowRequest, security: operations.DeleteWorkflowSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteWorkflowResponse>;
    deleteWorkspace(req: operations.DeleteWorkspaceRequest, security: operations.DeleteWorkspaceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspaceResponse>;
    fetchActivity(req: operations.FetchActivityRequest, security: operations.FetchActivitySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchActivityResponse>;
    fetchEvent(req: operations.FetchEventRequest, security: operations.FetchEventSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchEventResponse>;
    fetchTask(req: operations.FetchTaskRequest, security: operations.FetchTaskSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchTaskResponse>;
    fetchTaskChannel(req: operations.FetchTaskChannelRequest, security: operations.FetchTaskChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchTaskChannelResponse>;
    fetchTaskQueue(req: operations.FetchTaskQueueRequest, security: operations.FetchTaskQueueSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchTaskQueueResponse>;
    fetchTaskQueueCumulativeStatistics(req: operations.FetchTaskQueueCumulativeStatisticsRequest, security: operations.FetchTaskQueueCumulativeStatisticsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchTaskQueueCumulativeStatisticsResponse>;
    fetchTaskQueueRealTimeStatistics(req: operations.FetchTaskQueueRealTimeStatisticsRequest, security: operations.FetchTaskQueueRealTimeStatisticsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchTaskQueueRealTimeStatisticsResponse>;
    fetchTaskQueueStatistics(req: operations.FetchTaskQueueStatisticsRequest, security: operations.FetchTaskQueueStatisticsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchTaskQueueStatisticsResponse>;
    fetchTaskReservation(req: operations.FetchTaskReservationRequest, security: operations.FetchTaskReservationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchTaskReservationResponse>;
    fetchWorker(req: operations.FetchWorkerRequest, security: operations.FetchWorkerSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchWorkerResponse>;
    fetchWorkerChannel(req: operations.FetchWorkerChannelRequest, security: operations.FetchWorkerChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchWorkerChannelResponse>;
    fetchWorkerInstanceStatistics(req: operations.FetchWorkerInstanceStatisticsRequest, security: operations.FetchWorkerInstanceStatisticsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchWorkerInstanceStatisticsResponse>;
    fetchWorkerReservation(req: operations.FetchWorkerReservationRequest, security: operations.FetchWorkerReservationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchWorkerReservationResponse>;
    fetchWorkerStatistics(req: operations.FetchWorkerStatisticsRequest, security: operations.FetchWorkerStatisticsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchWorkerStatisticsResponse>;
    fetchWorkersCumulativeStatistics(req: operations.FetchWorkersCumulativeStatisticsRequest, security: operations.FetchWorkersCumulativeStatisticsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchWorkersCumulativeStatisticsResponse>;
    fetchWorkersRealTimeStatistics(req: operations.FetchWorkersRealTimeStatisticsRequest, security: operations.FetchWorkersRealTimeStatisticsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchWorkersRealTimeStatisticsResponse>;
    fetchWorkflow(req: operations.FetchWorkflowRequest, security: operations.FetchWorkflowSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchWorkflowResponse>;
    fetchWorkflowCumulativeStatistics(req: operations.FetchWorkflowCumulativeStatisticsRequest, security: operations.FetchWorkflowCumulativeStatisticsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchWorkflowCumulativeStatisticsResponse>;
    fetchWorkflowRealTimeStatistics(req: operations.FetchWorkflowRealTimeStatisticsRequest, security: operations.FetchWorkflowRealTimeStatisticsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchWorkflowRealTimeStatisticsResponse>;
    fetchWorkflowStatistics(req: operations.FetchWorkflowStatisticsRequest, security: operations.FetchWorkflowStatisticsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchWorkflowStatisticsResponse>;
    fetchWorkspace(req: operations.FetchWorkspaceRequest, security: operations.FetchWorkspaceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchWorkspaceResponse>;
    fetchWorkspaceCumulativeStatistics(req: operations.FetchWorkspaceCumulativeStatisticsRequest, security: operations.FetchWorkspaceCumulativeStatisticsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchWorkspaceCumulativeStatisticsResponse>;
    fetchWorkspaceRealTimeStatistics(req: operations.FetchWorkspaceRealTimeStatisticsRequest, security: operations.FetchWorkspaceRealTimeStatisticsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchWorkspaceRealTimeStatisticsResponse>;
    fetchWorkspaceStatistics(req: operations.FetchWorkspaceStatisticsRequest, security: operations.FetchWorkspaceStatisticsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchWorkspaceStatisticsResponse>;
    listActivity(req: operations.ListActivityRequest, security: operations.ListActivitySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListActivityResponse>;
    listEvent(req: operations.ListEventRequest, security: operations.ListEventSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListEventResponse>;
    listTask(req: operations.ListTaskRequest, security: operations.ListTaskSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListTaskResponse>;
    listTaskChannel(req: operations.ListTaskChannelRequest, security: operations.ListTaskChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListTaskChannelResponse>;
    listTaskQueue(req: operations.ListTaskQueueRequest, security: operations.ListTaskQueueSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListTaskQueueResponse>;
    listTaskQueuesStatistics(req: operations.ListTaskQueuesStatisticsRequest, security: operations.ListTaskQueuesStatisticsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListTaskQueuesStatisticsResponse>;
    listTaskReservation(req: operations.ListTaskReservationRequest, security: operations.ListTaskReservationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListTaskReservationResponse>;
    listWorker(req: operations.ListWorkerRequest, security: operations.ListWorkerSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListWorkerResponse>;
    listWorkerChannel(req: operations.ListWorkerChannelRequest, security: operations.ListWorkerChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListWorkerChannelResponse>;
    listWorkerReservation(req: operations.ListWorkerReservationRequest, security: operations.ListWorkerReservationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListWorkerReservationResponse>;
    listWorkflow(req: operations.ListWorkflowRequest, security: operations.ListWorkflowSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListWorkflowResponse>;
    listWorkspace(req: operations.ListWorkspaceRequest, security: operations.ListWorkspaceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListWorkspaceResponse>;
    updateActivity(req: operations.UpdateActivityRequest, security: operations.UpdateActivitySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateActivityResponse>;
    updateTask(req: operations.UpdateTaskRequest, security: operations.UpdateTaskSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateTaskResponse>;
    updateTaskChannel(req: operations.UpdateTaskChannelRequest, security: operations.UpdateTaskChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateTaskChannelResponse>;
    updateTaskQueue(req: operations.UpdateTaskQueueRequest, security: operations.UpdateTaskQueueSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateTaskQueueResponse>;
    updateTaskReservation(req: operations.UpdateTaskReservationRequest, security: operations.UpdateTaskReservationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateTaskReservationResponse>;
    updateWorker(req: operations.UpdateWorkerRequest, security: operations.UpdateWorkerSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateWorkerResponse>;
    updateWorkerChannel(req: operations.UpdateWorkerChannelRequest, security: operations.UpdateWorkerChannelSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateWorkerChannelResponse>;
    updateWorkerReservation(req: operations.UpdateWorkerReservationRequest, security: operations.UpdateWorkerReservationSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateWorkerReservationResponse>;
    updateWorkflow(req: operations.UpdateWorkflowRequest, security: operations.UpdateWorkflowSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateWorkflowResponse>;
    updateWorkspace(req: operations.UpdateWorkspaceRequest, security: operations.UpdateWorkspaceSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateWorkspaceResponse>;
}
