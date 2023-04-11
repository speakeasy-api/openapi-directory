import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Activities
 */
export declare class Activities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create an activity
     *
     * @remarks
     * Creates an activity. An activity will mark the associated action as completed. Currently,
     * only certain action types can have an activity explicitly created for them.
     *
     */
    postV2ActivitiesJson(req: operations.PostV2ActivitiesJsonRequestBody, config?: AxiosRequestConfig): Promise<operations.PostV2ActivitiesJsonResponse>;
}
