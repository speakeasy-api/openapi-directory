import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Actions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets all available Actions of a Device
     *
     * @remarks
     * Gets all available Actions of a Device
     */
    actionsGet(req: operations.ActionsGetRequest, config?: AxiosRequestConfig): Promise<operations.ActionsGetResponse>;
    /**
     * Set an action for the specified device.
     *
     * @remarks
     * Set an action for the specified device.
     */
    actionsPostForm(req: shared.ActionToPost, config?: AxiosRequestConfig): Promise<operations.ActionsPostFormResponse>;
    /**
     * Set an action for the specified device.
     *
     * @remarks
     * Set an action for the specified device.
     */
    actionsPostJson(req: shared.ActionToPost, config?: AxiosRequestConfig): Promise<operations.ActionsPostJsonResponse>;
    /**
     * Set an action for the specified device.
     *
     * @remarks
     * Set an action for the specified device.
     */
    actionsPostRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.ActionsPostRawResponse>;
}
