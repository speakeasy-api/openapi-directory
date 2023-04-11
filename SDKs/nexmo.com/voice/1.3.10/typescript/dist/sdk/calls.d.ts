import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Fetch, Create and Modify voice calls
 */
export declare class Calls {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create an outbound call
     *
     * @remarks
     * Create an outbound Call
     */
    createCall(req: any, security: operations.CreateCallSecurity, config?: AxiosRequestConfig): Promise<operations.CreateCallResponse>;
    /**
     * Get detail of a specific call
     *
     * @remarks
     * Get detail of a specific call
     */
    getCall(req: operations.GetCallRequest, security: operations.GetCallSecurity, config?: AxiosRequestConfig): Promise<operations.GetCallResponse>;
    /**
     * Get details of your calls
     *
     * @remarks
     * Get details of your calls
     */
    getCalls(req: operations.GetCallsRequest, security: operations.GetCallsSecurity, config?: AxiosRequestConfig): Promise<operations.GetCallsResponse>;
    /**
     * Modify an in progress call
     *
     * @remarks
     * Modify an in progress call
     */
    updateCall(req: operations.UpdateCallRequest, security: operations.UpdateCallSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateCallResponse>;
}
