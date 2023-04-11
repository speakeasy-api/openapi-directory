import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations to retrieve the revisions for custom workflow actions.
 */
export declare class Revisions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a revision for a custom action
     *
     * @remarks
     * Returns the given version of a custom workflow action.
     */
    getAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetById(req: operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdRequest, security: operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsRevisionIdGetByIdResponse>;
    /**
     * Get all revisions for a custom action
     *
     * @remarks
     * Returns a list of revisions for a custom workflow action.
     */
    getAutomationV4ActionsAppIdDefinitionIdRevisionsGetPage(req: operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageRequest, security: operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageSecurity, config?: AxiosRequestConfig): Promise<operations.GetAutomationV4ActionsAppIdDefinitionIdRevisionsGetPageResponse>;
}
