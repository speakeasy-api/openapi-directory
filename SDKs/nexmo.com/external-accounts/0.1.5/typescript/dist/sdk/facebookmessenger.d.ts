import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FacebookMessenger {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createMessengerAccount - Create a Messenger account
    **/
    createMessengerAccount(req: operations.CreateMessengerAccountRequest, config?: AxiosRequestConfig): Promise<operations.CreateMessengerAccountResponse>;
    /**
     * deleteMessengerAccount - Delete a Messenger account
    **/
    deleteMessengerAccount(req: operations.DeleteMessengerAccountRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMessengerAccountResponse>;
    /**
     * getMessengerAccount - Retrieve a Messenger account
    **/
    getMessengerAccount(req: operations.GetMessengerAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetMessengerAccountResponse>;
    /**
     * updateMessengerAccount - Update a Messenger account
    **/
    updateMessengerAccount(req: operations.UpdateMessengerAccountRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMessengerAccountResponse>;
}
