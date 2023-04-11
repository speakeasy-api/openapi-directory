import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * This folder contains Wi-Fi related endpoints.
 */
export declare class Wifi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Connect to Wi-Fi Network
     *
     * @remarks
     * **Note:** Not sure how the password is encrypted. Might be using the public certificate from /setup/eureka_info. So this cannot be used as of now. If someone figures it out, please [create a new issue here](https://github.com/rithvikvibhu/GHLocalApi/issues/new).
     */
    connecttoWiFiNetwork(req: shared.ConnecttoWiFiNetworkRequest, config?: AxiosRequestConfig): Promise<operations.ConnecttoWiFiNetworkResponse>;
    /**
     * Forget Wi-Fi Network
     *
     * @remarks
     * This is to forget a saved network by `wpa_id`. Get the `wpa_id` from /setup/configured_networks
     */
    forgetWiFiNetwork(req: shared.ForgetWiFiNetworkRequest, config?: AxiosRequestConfig): Promise<operations.ForgetWiFiNetworkResponse>;
    /**
     * Get Saved Networks
     *
     * @remarks
     * This gets a list of all saved Wi-Fi networks.
     *
     * Each network has `ssid`, `wpa_auth`, `wpa_cipher` and `wpa_id`.
     * `wpa_id` is an incrementing number used to identify a saved network.
     * #TODO: Add values for `wpa_auth` and `wpa_cipher`.
     */
    getSavedNetworks(config?: AxiosRequestConfig): Promise<operations.GetSavedNetworksResponse>;
    /**
     * Get Wi-Fi Scan Results
     *
     * @remarks
     * This gets a list of all nearby Wi-Fi access points.
     *
     * The list only has the connected AP by default. Once a scan is triggered by `/setup/scan_wifi`, the whole list is cached for ~3 minutes. Then it will revert to returning only the connected AP again.
     */
    getWiFiScanResults(config?: AxiosRequestConfig): Promise<operations.GetWiFiScanResultsResponse>;
    /**
     * Scan for Networks
     *
     * @remarks
     * This initiates scanning for Wi-Fi networks.
     *
     * The results can be obtained with `/setup/scan_results` after triggering the scan with this request.
     */
    scanforNetworks(config?: AxiosRequestConfig): Promise<operations.ScanforNetworksResponse>;
}
