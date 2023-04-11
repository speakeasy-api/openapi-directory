import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Information about media types
 */
export declare class MediaTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get MediaTypes
     *
     * @remarks
     * Information about media types
     */
    getResourcesMediaTypesFormat(req: operations.GetResourcesMediaTypesFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesMediaTypesFormatResponse>;
}
