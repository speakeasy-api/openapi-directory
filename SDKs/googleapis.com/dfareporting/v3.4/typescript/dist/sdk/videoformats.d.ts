import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class VideoFormats {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets one video format by ID.
     */
    dfareportingVideoFormatsGet(req: operations.DfareportingVideoFormatsGetRequest, security: operations.DfareportingVideoFormatsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingVideoFormatsGetResponse>;
    /**
     * Lists available video formats.
     */
    dfareportingVideoFormatsList(req: operations.DfareportingVideoFormatsListRequest, security: operations.DfareportingVideoFormatsListSecurity, config?: AxiosRequestConfig): Promise<operations.DfareportingVideoFormatsListResponse>;
}
