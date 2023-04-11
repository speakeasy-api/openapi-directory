import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Latest {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the latest available reading for each metric from each sensor, sorted by sensor serial
     *
     * @remarks
     * Return the latest available reading for each metric from each sensor, sorted by sensor serial
     */
    getOrganizationSensorReadingsLatest(req: operations.GetOrganizationSensorReadingsLatestRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSensorReadingsLatestResponse>;
}
