import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PicoSettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * GET: api/pico/settings
     *
     *             Returns the settings of a pico charging station.
     */
    picoSettingsGet(req: operations.PicoSettingsGetRequest, config?: AxiosRequestConfig): Promise<operations.PicoSettingsGetResponse>;
}
