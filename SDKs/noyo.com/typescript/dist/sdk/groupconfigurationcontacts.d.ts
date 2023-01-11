import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class GroupConfigurationContacts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createContact - Create new Contact
     *
     * Create a new contact for a group
    **/
    createContact(req: operations.CreateContactRequest, config?: AxiosRequestConfig): Promise<operations.CreateContactResponse>;
    /**
     * editContact - Edit a Contact
     *
     * Edit and existing contact for a group
    **/
    editContact(req: operations.EditContactRequest, config?: AxiosRequestConfig): Promise<operations.EditContactResponse>;
    /**
     * getContact - Get Contact
     *
     * Returns the latest version of a single contact based on the ID provided.
    **/
    getContact(req: operations.GetContactRequest, config?: AxiosRequestConfig): Promise<operations.GetContactResponse>;
    /**
     * getContactList - Get all Group Contacts
     *
     * Returns a list of all contacts for a given group
    **/
    getContactList(req: operations.GetContactListRequest, config?: AxiosRequestConfig): Promise<operations.GetContactListResponse>;
}
