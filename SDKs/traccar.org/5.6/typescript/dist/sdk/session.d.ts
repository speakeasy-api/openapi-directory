import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * User session management
 */
export declare class Session {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Close the Session
     */
    deleteSession(config?: AxiosRequestConfig): Promise<operations.DeleteSessionResponse>;
    /**
     * Fetch Session information
     */
    getSession(req: operations.GetSessionRequest, config?: AxiosRequestConfig): Promise<operations.GetSessionResponse>;
    /**
     * Create a new Session
     */
    postSession(req: operations.PostSessionRequestBody, config?: AxiosRequestConfig): Promise<operations.PostSessionResponse>;
}
