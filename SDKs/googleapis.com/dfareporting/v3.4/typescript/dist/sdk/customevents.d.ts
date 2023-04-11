import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomEvents {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Inserts custom events.
     */
    dfareportingCustomEventsBatchinsert(req: operations.DfareportingCustomEventsBatchinsertRequest, security: operations.DfareportingCustomEventsBatchinsertSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingCustomEventsBatchinsertResponse>;
}
