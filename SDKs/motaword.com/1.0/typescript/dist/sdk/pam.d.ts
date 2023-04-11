import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Pam {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the Pam profile of a client for this client ID
     *
     * @remarks
     * Get the Pam  profile of a client for this client ID
     */
    getClientProfileForPam(req: operations.GetClientProfileForPamRequest, config?: AxiosRequestConfig): Promise<operations.GetClientProfileForPamResponse>;
    /**
     * Get completion report data of a project
     *
     * @remarks
     * Get completion report data of a project
     */
    getProjectCompletionReportForPam(req: operations.GetProjectCompletionReportForPamRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectCompletionReportForPamResponse>;
    /**
     * Sends a message to chat
     *
     * @remarks
     * Sends a message to the channel.
     */
    postMessage(req: shared.PamMessage, config?: AxiosRequestConfig): Promise<operations.PostMessageResponse>;
}
