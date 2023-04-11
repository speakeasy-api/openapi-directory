import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PicoChargingHistory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets the last charging history for a pico station
     */
    picoChargingHistoryGet(req: operations.PicoChargingHistoryGetRequest, config?: AxiosRequestConfig): Promise<operations.PicoChargingHistoryGetResponse>;
}
