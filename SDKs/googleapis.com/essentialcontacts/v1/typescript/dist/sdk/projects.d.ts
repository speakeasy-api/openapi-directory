import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Lists all contacts for the resource that are subscribed to the specified notification categories, including contacts inherited from any parent resources.
     */
    essentialcontactsProjectsContactsCompute(req: operations.EssentialcontactsProjectsContactsComputeRequest, security: operations.EssentialcontactsProjectsContactsComputeSecurity, config?: AxiosRequestConfig): Promise<operations.EssentialcontactsProjectsContactsComputeResponse>;
    /**
     * Adds a new contact for a resource.
     */
    essentialcontactsProjectsContactsCreate(req: operations.EssentialcontactsProjectsContactsCreateRequest, security: operations.EssentialcontactsProjectsContactsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.EssentialcontactsProjectsContactsCreateResponse>;
    /**
     * Deletes a contact.
     */
    essentialcontactsProjectsContactsDelete(req: operations.EssentialcontactsProjectsContactsDeleteRequest, security: operations.EssentialcontactsProjectsContactsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.EssentialcontactsProjectsContactsDeleteResponse>;
    /**
     * Gets a single contact.
     */
    essentialcontactsProjectsContactsGet(req: operations.EssentialcontactsProjectsContactsGetRequest, security: operations.EssentialcontactsProjectsContactsGetSecurity, config?: AxiosRequestConfig): Promise<operations.EssentialcontactsProjectsContactsGetResponse>;
    /**
     * Lists the contacts that have been set on a resource.
     */
    essentialcontactsProjectsContactsList(req: operations.EssentialcontactsProjectsContactsListRequest, security: operations.EssentialcontactsProjectsContactsListSecurity, config?: AxiosRequestConfig): Promise<operations.EssentialcontactsProjectsContactsListResponse>;
    /**
     * Updates a contact. Note: A contact's email address cannot be changed.
     */
    essentialcontactsProjectsContactsPatch(req: operations.EssentialcontactsProjectsContactsPatchRequest, security: operations.EssentialcontactsProjectsContactsPatchSecurity, config?: AxiosRequestConfig): Promise<operations.EssentialcontactsProjectsContactsPatchResponse>;
    /**
     * Allows a contact admin to send a test message to contact to verify that it has been configured correctly.
     */
    essentialcontactsProjectsContactsSendTestMessage(req: operations.EssentialcontactsProjectsContactsSendTestMessageRequest, security: operations.EssentialcontactsProjectsContactsSendTestMessageSecurity, config?: AxiosRequestConfig): Promise<operations.EssentialcontactsProjectsContactsSendTestMessageResponse>;
}
