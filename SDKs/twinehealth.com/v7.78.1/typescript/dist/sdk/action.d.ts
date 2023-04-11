import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * An action is an actionable item in a patient's plan.
 */
export declare class Action {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create action
     *
     * @remarks
     * Create a plan action
     */
    createAction(req: shared.CreateActionRequestInput, config?: AxiosRequestConfig): Promise<operations.CreateActionResponse>;
    /**
     * Get an action
     *
     * @remarks
     * Get a health action from a patient's plan.
     */
    fetchAction(req: operations.FetchActionRequest, config?: AxiosRequestConfig): Promise<operations.FetchActionResponse>;
    /**
     * Update an action
     *
     * @remarks
     * Update a health action from a patient's plan.
     */
    updateAction(req: operations.UpdateActionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateActionResponse>;
}
