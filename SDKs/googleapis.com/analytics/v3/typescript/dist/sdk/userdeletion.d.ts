import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UserDeletion {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Insert or update a user deletion requests.
     */
    analyticsUserDeletionUserDeletionRequestUpsert(req: operations.AnalyticsUserDeletionUserDeletionRequestUpsertRequest, security: operations.AnalyticsUserDeletionUserDeletionRequestUpsertSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsUserDeletionUserDeletionRequestUpsertResponse>;
}
