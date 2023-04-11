import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Rfe {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a specific Rfe
     *
     * @remarks
     * Get a specific Rfe
     */
    getRfe(req: operations.GetRfeRequest, config?: AxiosRequestConfig): Promise<operations.GetRfeResponse>;
    /**
     * List the RFES
     *
     * @remarks
     * List the RFES
     */
    getRfeList(req: operations.GetRfeListRequest, config?: AxiosRequestConfig): Promise<operations.GetRfeListResponse>;
    /**
     * Create a RFE
     *
     * @remarks
     * Create a RFE
     */
    postRfeJson(req: operations.PostRfeJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostRfeJsonResponse>;
    /**
     * Create a RFE
     *
     * @remarks
     * Create a RFE
     */
    postRfeRaw(req: operations.PostRfeRawRequest, config?: AxiosRequestConfig): Promise<operations.PostRfeRawResponse>;
}
