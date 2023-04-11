import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ImageFamilyViews {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns the latest image that is part of an image family, is not deprecated and is rolled out in the specified zone.
     */
    computeImageFamilyViewsGet(req: operations.ComputeImageFamilyViewsGetRequest, security: operations.ComputeImageFamilyViewsGetSecurity, config?: AxiosRequestConfig): Promise<operations.ComputeImageFamilyViewsGetResponse>;
}
