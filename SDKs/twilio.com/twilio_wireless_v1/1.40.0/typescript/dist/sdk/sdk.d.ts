import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://wireless.twilio.com"];
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
    /**
     * Send a Command to a Sim.
     */
    createCommand(req: operations.CreateCommandCreateCommandRequest, security: operations.CreateCommandSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateCommandResponse>;
    createRatePlan(req: operations.CreateRatePlanCreateRatePlanRequest, security: operations.CreateRatePlanSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.CreateRatePlanResponse>;
    /**
     * Delete a Command instance from your account.
     */
    deleteCommand(req: operations.DeleteCommandRequest, security: operations.DeleteCommandSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteCommandResponse>;
    deleteRatePlan(req: operations.DeleteRatePlanRequest, security: operations.DeleteRatePlanSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteRatePlanResponse>;
    /**
     * Delete a Sim resource on your Account.
     */
    deleteSim(req: operations.DeleteSimRequest, security: operations.DeleteSimSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.DeleteSimResponse>;
    /**
     * Fetch a Command instance from your account.
     */
    fetchCommand(req: operations.FetchCommandRequest, security: operations.FetchCommandSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchCommandResponse>;
    fetchRatePlan(req: operations.FetchRatePlanRequest, security: operations.FetchRatePlanSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchRatePlanResponse>;
    /**
     * Fetch a Sim resource on your Account.
     */
    fetchSim(req: operations.FetchSimRequest, security: operations.FetchSimSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.FetchSimResponse>;
    listAccountUsageRecord(req: operations.ListAccountUsageRecordRequest, security: operations.ListAccountUsageRecordSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListAccountUsageRecordResponse>;
    /**
     * Retrieve a list of Commands from your account.
     */
    listCommand(req: operations.ListCommandRequest, security: operations.ListCommandSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListCommandResponse>;
    listDataSession(req: operations.ListDataSessionRequest, security: operations.ListDataSessionSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListDataSessionResponse>;
    listRatePlan(req: operations.ListRatePlanRequest, security: operations.ListRatePlanSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListRatePlanResponse>;
    /**
     * Retrieve a list of Sim resources on your Account.
     */
    listSim(req: operations.ListSimRequest, security: operations.ListSimSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListSimResponse>;
    listUsageRecord(req: operations.ListUsageRecordRequest, security: operations.ListUsageRecordSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.ListUsageRecordResponse>;
    updateRatePlan(req: operations.UpdateRatePlanRequest, security: operations.UpdateRatePlanSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateRatePlanResponse>;
    /**
     * Updates the given properties of a Sim resource on your Account.
     */
    updateSim(req: operations.UpdateSimRequest, security: operations.UpdateSimSecurity, serverURL?: string, config?: AxiosRequestConfig): Promise<operations.UpdateSimResponse>;
}
