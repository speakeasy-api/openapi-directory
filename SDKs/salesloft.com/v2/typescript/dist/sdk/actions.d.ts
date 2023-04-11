import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Actions
 */
export declare class Actions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List actions
     *
     * @remarks
     * Fetches multiple action records. The records can be filtered, paged, and sorted according to
     * the respective parameters. Only actions that are currently "in_progess" will be returned by
     * this endpoint.
     *
     * If the requester is not an admin, this endpoint will only return actions belonging to the requester.
     * If the request is an admin, this endpoint will return actions for the entire team. Additionaly, an admin
     * may use the user_guid parameter to request actions that belong to specific users on the team.
     *
     */
    getV2ActionsJson(req: operations.GetV2ActionsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2ActionsJsonResponse>;
    /**
     * Fetch an action
     *
     * @remarks
     * Fetches an action, by ID only.
     * This endpoint will only return actions that are in_progress or pending_activity.
     * Once an action is complete, the request for that action will return a 404 status code.
     *
     */
    getV2ActionsIdJson(req: operations.GetV2ActionsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2ActionsIdJsonResponse>;
}
