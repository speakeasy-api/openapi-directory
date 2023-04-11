import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Miscellaneous functionality.
 */
export declare class Misc {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Send feedback
     *
     * @remarks
     * Allows users to send feedback about the trashnothing.com site or apps.
     */
    sendFeedback(req: operations.SendFeedbackRequestBody, config?: AxiosRequestConfig): Promise<operations.SendFeedbackResponse>;
}
