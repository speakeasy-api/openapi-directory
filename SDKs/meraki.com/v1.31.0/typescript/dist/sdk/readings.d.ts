import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Readings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return all reported readings from sensors in a given timespan, sorted by timestamp
     *
     * @remarks
     * Return all reported readings from sensors in a given timespan, sorted by timestamp
     */
    getOrganizationSensorReadingsHistory(req: operations.GetOrganizationSensorReadingsHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSensorReadingsHistoryResponse>;
    /**
     * Return the latest available reading for each metric from each sensor, sorted by sensor serial
     *
     * @remarks
     * Return the latest available reading for each metric from each sensor, sorted by sensor serial
     */
    getOrganizationSensorReadingsLatest(req: operations.GetOrganizationSensorReadingsLatestRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSensorReadingsLatestResponse>;
}
