import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://autopilot.twilio.com"];
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
    createAssistant(req: operations.CreateAssistantCreateAssistantRequest, security: operations.CreateAssistantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateAssistantResponse>;
    createField(req: operations.CreateFieldRequest, security: operations.CreateFieldSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateFieldResponse>;
    createFieldType(req: operations.CreateFieldTypeRequest, security: operations.CreateFieldTypeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateFieldTypeResponse>;
    createFieldValue(req: operations.CreateFieldValueRequest, security: operations.CreateFieldValueSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateFieldValueResponse>;
    createModelBuild(req: operations.CreateModelBuildRequest, security: operations.CreateModelBuildSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateModelBuildResponse>;
    createQuery(req: operations.CreateQueryRequest, security: operations.CreateQuerySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateQueryResponse>;
    createSample(req: operations.CreateSampleRequest, security: operations.CreateSampleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateSampleResponse>;
    createTask(req: operations.CreateTaskRequest, security: operations.CreateTaskSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateTaskResponse>;
    createWebhook(req: operations.CreateWebhookRequest, security: operations.CreateWebhookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateWebhookResponse>;
    deleteAssistant(req: operations.DeleteAssistantRequest, security: operations.DeleteAssistantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteAssistantResponse>;
    deleteField(req: operations.DeleteFieldRequest, security: operations.DeleteFieldSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteFieldResponse>;
    deleteFieldType(req: operations.DeleteFieldTypeRequest, security: operations.DeleteFieldTypeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteFieldTypeResponse>;
    deleteFieldValue(req: operations.DeleteFieldValueRequest, security: operations.DeleteFieldValueSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteFieldValueResponse>;
    deleteModelBuild(req: operations.DeleteModelBuildRequest, security: operations.DeleteModelBuildSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteModelBuildResponse>;
    deleteQuery(req: operations.DeleteQueryRequest, security: operations.DeleteQuerySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteQueryResponse>;
    deleteSample(req: operations.DeleteSampleRequest, security: operations.DeleteSampleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSampleResponse>;
    deleteTask(req: operations.DeleteTaskRequest, security: operations.DeleteTaskSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteTaskResponse>;
    deleteWebhook(req: operations.DeleteWebhookRequest, security: operations.DeleteWebhookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteWebhookResponse>;
    fetchAssistant(req: operations.FetchAssistantRequest, security: operations.FetchAssistantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchAssistantResponse>;
    fetchDefaults(req: operations.FetchDefaultsRequest, security: operations.FetchDefaultsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchDefaultsResponse>;
    fetchDialogue(req: operations.FetchDialogueRequest, security: operations.FetchDialogueSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchDialogueResponse>;
    fetchField(req: operations.FetchFieldRequest, security: operations.FetchFieldSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchFieldResponse>;
    fetchFieldType(req: operations.FetchFieldTypeRequest, security: operations.FetchFieldTypeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchFieldTypeResponse>;
    fetchFieldValue(req: operations.FetchFieldValueRequest, security: operations.FetchFieldValueSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchFieldValueResponse>;
    fetchModelBuild(req: operations.FetchModelBuildRequest, security: operations.FetchModelBuildSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchModelBuildResponse>;
    fetchQuery(req: operations.FetchQueryRequest, security: operations.FetchQuerySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchQueryResponse>;
    fetchSample(req: operations.FetchSampleRequest, security: operations.FetchSampleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSampleResponse>;
    /**
     * Returns Style sheet JSON object for the Assistant
     */
    fetchStyleSheet(req: operations.FetchStyleSheetRequest, security: operations.FetchStyleSheetSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchStyleSheetResponse>;
    fetchTask(req: operations.FetchTaskRequest, security: operations.FetchTaskSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchTaskResponse>;
    /**
     * Returns JSON actions for the Task.
     */
    fetchTaskActions(req: operations.FetchTaskActionsRequest, security: operations.FetchTaskActionsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchTaskActionsResponse>;
    fetchTaskStatistics(req: operations.FetchTaskStatisticsRequest, security: operations.FetchTaskStatisticsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchTaskStatisticsResponse>;
    fetchWebhook(req: operations.FetchWebhookRequest, security: operations.FetchWebhookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchWebhookResponse>;
    listAssistant(req: operations.ListAssistantRequest, security: operations.ListAssistantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListAssistantResponse>;
    listField(req: operations.ListFieldRequest, security: operations.ListFieldSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListFieldResponse>;
    listFieldType(req: operations.ListFieldTypeRequest, security: operations.ListFieldTypeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListFieldTypeResponse>;
    listFieldValue(req: operations.ListFieldValueRequest, security: operations.ListFieldValueSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListFieldValueResponse>;
    listModelBuild(req: operations.ListModelBuildRequest, security: operations.ListModelBuildSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListModelBuildResponse>;
    listQuery(req: operations.ListQueryRequest, security: operations.ListQuerySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListQueryResponse>;
    listSample(req: operations.ListSampleRequest, security: operations.ListSampleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSampleResponse>;
    listTask(req: operations.ListTaskRequest, security: operations.ListTaskSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListTaskResponse>;
    listWebhook(req: operations.ListWebhookRequest, security: operations.ListWebhookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListWebhookResponse>;
    updateAssistant(req: operations.UpdateAssistantRequest, security: operations.UpdateAssistantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateAssistantResponse>;
    updateDefaults(req: operations.UpdateDefaultsRequest, security: operations.UpdateDefaultsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateDefaultsResponse>;
    updateFieldType(req: operations.UpdateFieldTypeRequest, security: operations.UpdateFieldTypeSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateFieldTypeResponse>;
    updateModelBuild(req: operations.UpdateModelBuildRequest, security: operations.UpdateModelBuildSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateModelBuildResponse>;
    updateQuery(req: operations.UpdateQueryRequest, security: operations.UpdateQuerySecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateQueryResponse>;
    updateRestoreAssistant(req: operations.UpdateRestoreAssistantUpdateRestoreAssistantRequest, security: operations.UpdateRestoreAssistantSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateRestoreAssistantResponse>;
    updateSample(req: operations.UpdateSampleRequest, security: operations.UpdateSampleSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSampleResponse>;
    /**
     * Updates the style sheet for an Assistant identified by `assistant_sid`.
     */
    updateStyleSheet(req: operations.UpdateStyleSheetRequest, security: operations.UpdateStyleSheetSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateStyleSheetResponse>;
    updateTask(req: operations.UpdateTaskRequest, security: operations.UpdateTaskSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateTaskResponse>;
    /**
     * Updates the actions of an Task identified by {TaskSid} or {TaskUniqueName}.
     */
    updateTaskActions(req: operations.UpdateTaskActionsRequest, security: operations.UpdateTaskActionsSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateTaskActionsResponse>;
    updateWebhook(req: operations.UpdateWebhookRequest, security: operations.UpdateWebhookSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateWebhookResponse>;
}
