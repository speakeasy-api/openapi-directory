import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Send or track messages to one contact, a group of contacts or your entire address book
 */
export declare class Messages {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Fetch message by id
     *
     * @remarks
     * Returns a single messag
     */
    messagesFetch(req: operations.MessagesFetchRequest, security: operations.MessagesFetchSecurity, config?: AxiosRequestConfig): Promise<operations.MessagesFetchResponse>;
    /**
     * Fetch messages
     */
    messagesFetchAll(req: operations.MessagesFetchAllRequest, security: operations.MessagesFetchAllSecurity, config?: AxiosRequestConfig): Promise<operations.MessagesFetchAllResponse>;
    /**
     * Send Messages
     */
    messagesSend(req: operations.MessagesSendRequest, security: operations.MessagesSendSecurity, config?: AxiosRequestConfig): Promise<operations.MessagesSendResponse>;
}
