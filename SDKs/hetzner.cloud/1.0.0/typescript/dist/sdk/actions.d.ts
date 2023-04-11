import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Actions show the results and progress of asynchronous requests to the API.
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
     * Get all Actions
     *
     * @remarks
     * Returns all Action objects. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.
     */
    getActions(req: operations.GetActionsRequest, config?: AxiosRequestConfig): Promise<operations.GetActionsResponse>;
    /**
     * Get an Action
     *
     * @remarks
     * Returns a specific Action object.
     */
    getActionsId(req: operations.GetActionsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetActionsIdResponse>;
}
