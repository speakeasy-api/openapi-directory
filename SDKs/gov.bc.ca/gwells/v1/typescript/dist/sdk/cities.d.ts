import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Cities {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * citiesDrillersList - returns a list of cities with a qualified, registered operator (driller or installer)
    **/
    citiesDrillersList(config?: AxiosRequestConfig): Promise<operations.CitiesDrillersListResponse>;
    /**
     * citiesInstallersList - returns a list of cities with a qualified, registered operator (driller or installer)
    **/
    citiesInstallersList(config?: AxiosRequestConfig): Promise<operations.CitiesInstallersListResponse>;
}
