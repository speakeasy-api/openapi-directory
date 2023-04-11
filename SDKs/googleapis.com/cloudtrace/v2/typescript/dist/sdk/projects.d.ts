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
     * Batch writes new spans to new or existing traces. You cannot update existing spans.
     */
    cloudtraceProjectsTracesBatchWrite(req: operations.CloudtraceProjectsTracesBatchWriteRequest, security: operations.CloudtraceProjectsTracesBatchWriteSecurity, config?: AxiosRequestConfig): Promise<operations.CloudtraceProjectsTracesBatchWriteResponse>;
    /**
     * Creates a new span.
     */
    cloudtraceProjectsTracesSpansCreateSpan(req: operations.CloudtraceProjectsTracesSpansCreateSpanRequest, security: operations.CloudtraceProjectsTracesSpansCreateSpanSecurity, config?: AxiosRequestConfig): Promise<operations.CloudtraceProjectsTracesSpansCreateSpanResponse>;
}
