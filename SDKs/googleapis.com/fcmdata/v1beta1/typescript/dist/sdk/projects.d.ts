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
     * List aggregate delivery data for the given Android application.
     */
    fcmdataProjectsAndroidAppsDeliveryDataList(req: operations.FcmdataProjectsAndroidAppsDeliveryDataListRequest, security: operations.FcmdataProjectsAndroidAppsDeliveryDataListSecurity, config?: AxiosRequestConfig): Promise<operations.FcmdataProjectsAndroidAppsDeliveryDataListResponse>;
}
