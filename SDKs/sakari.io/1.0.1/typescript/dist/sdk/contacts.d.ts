import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Create, modify or delete contacts
 */
export declare class Contacts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create contact
     */
    contactsCreateJson(req: operations.ContactsCreateJsonRequest, security: operations.ContactsCreateJsonSecurity, config?: AxiosRequestConfig): Promise<operations.ContactsCreateJsonResponse>;
    /**
     * Create contact
     */
    contactsCreateString(req: operations.ContactsCreateStringRequest, security: operations.ContactsCreateStringSecurity, config?: AxiosRequestConfig): Promise<operations.ContactsCreateStringResponse>;
    /**
     * Fetch contact by ID
     */
    contactsFetch(req: operations.ContactsFetchRequest, security: operations.ContactsFetchSecurity, config?: AxiosRequestConfig): Promise<operations.ContactsFetchResponse>;
    /**
     * Fetch contacts
     */
    contactsFetchAll(req: operations.ContactsFetchAllRequest, security: operations.ContactsFetchAllSecurity, config?: AxiosRequestConfig): Promise<operations.ContactsFetchAllResponse>;
    /**
     * Deletes a contact
     */
    contactsRemove(req: operations.ContactsRemoveRequest, security: operations.ContactsRemoveSecurity, config?: AxiosRequestConfig): Promise<operations.ContactsRemoveResponse>;
    /**
     * Updates a contact
     */
    contactsUpdate(req: operations.ContactsUpdateRequest, security: operations.ContactsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.ContactsUpdateResponse>;
}
