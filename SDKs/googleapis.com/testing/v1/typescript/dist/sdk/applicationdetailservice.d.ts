import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ApplicationDetailService {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets the details of an Android application APK.
     */
    testingApplicationDetailServiceGetApkDetails(req: operations.TestingApplicationDetailServiceGetApkDetailsRequest, security: operations.TestingApplicationDetailServiceGetApkDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.TestingApplicationDetailServiceGetApkDetailsResponse>;
}
