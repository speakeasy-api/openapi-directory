import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Endpoints for reading user and account segments
 */
export declare class Segments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get account segments
     *
     * @remarks
     * Endpoint to list account segments.
     */
    getAccountSegments(config?: AxiosRequestConfig): Promise<operations.GetAccountSegmentsResponse>;
    /**
     * Get user segments
     *
     * @remarks
     * Endpoint to list user segments.
     */
    getUserSegments(config?: AxiosRequestConfig): Promise<operations.GetUserSegmentsResponse>;
}
