import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations to configure custom workflow actions.
 */
export declare class Definitions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Archive a custom action
     *
     * @remarks
     * Archives a single custom workflow action with the specified ID. Workflows that currently use this custom action will stop attempting to execute the action, and all future executions will be marked as a failure.
     */
    deleteAutomationV4ActionsAppIdDefinitionIdArchive(req: operations.DeleteAutomationV4ActionsAppIdDefinitionIdArchiveRequest, security: operations.DeleteAutomationV4ActionsAppIdDefinitionIdArchiveSecurity, config?: AxiosRequestConfig): Promise<operations.DeleteAutomationV4ActionsAppIdDefinitionIdArchiveResponse>;
    /**
     * Get a custom action
     *
     * @remarks
     * Returns a single custom workflow action with the specified ID.
     */
    getAutomationV4ActionsAppIdDefinitionIdGetById(req: operations.GetAutomationV4ActionsAppIdDefinitionIdGetByIdRequest, security: operations.GetAutomationV4ActionsAppIdDefinitionIdGetByIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetAutomationV4ActionsAppIdDefinitionIdGetByIdResponse>;
    /**
     * Get all custom actions
     *
     * @remarks
     * Returns a list of all custom workflow actions.
     */
    getAutomationV4ActionsAppIdGetPage(req: operations.GetAutomationV4ActionsAppIdGetPageRequest, security: operations.GetAutomationV4ActionsAppIdGetPageSecurity, config?: AxiosRequestConfig): Promise<operations.GetAutomationV4ActionsAppIdGetPageResponse>;
    /**
     * Update a custom action
     *
     * @remarks
     * Updates a custom workflow action with new values for the specified fields.
     */
    patchAutomationV4ActionsAppIdDefinitionIdUpdate(req: operations.PatchAutomationV4ActionsAppIdDefinitionIdUpdateRequest, security: operations.PatchAutomationV4ActionsAppIdDefinitionIdUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PatchAutomationV4ActionsAppIdDefinitionIdUpdateResponse>;
    /**
     * Create new custom action
     *
     * @remarks
     * Creates a new custom workflow action.
     */
    postAutomationV4ActionsAppIdCreate(req: operations.PostAutomationV4ActionsAppIdCreateRequest, security: operations.PostAutomationV4ActionsAppIdCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PostAutomationV4ActionsAppIdCreateResponse>;
}
