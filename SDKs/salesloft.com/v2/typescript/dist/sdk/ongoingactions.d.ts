import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Ongoing Actions
 */
export declare class OngoingActions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create an ongoing action
     *
     * @remarks
     * Creates an ongoing action. An ongoing action is an action that is not yet completed,
     * but progress has been made towards the completion. The user should not need to do
     * anything for an ongoing action to be completed. An ongoing action can be later completed
     * by creating an activity.
     *
     * Ongoing actions are marked as status=pending_activity.
     *
     */
    postV2OngoingActionsJson(req: operations.PostV2OngoingActionsJsonRequestBody, config?: AxiosRequestConfig): Promise<operations.PostV2OngoingActionsJsonResponse>;
}
