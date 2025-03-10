import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Labels {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List labels in user
     *
     * @remarks
     * Lists labels belonging to a user by their ID.
     */
    getUsersIdLabels(req: operations.GetUsersIdLabelsRequest, config?: AxiosRequestConfig): Promise<operations.GetUsersIdLabelsResponse>;
}
