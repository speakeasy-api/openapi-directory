import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Send a message to specified target (a registration token, topic or condition).
     */
    fcmProjectsMessagesSend(req: operations.FcmProjectsMessagesSendRequest, security: operations.FcmProjectsMessagesSendSecurity, config?: AxiosRequestConfig): Promise<operations.FcmProjectsMessagesSendResponse>;
}
