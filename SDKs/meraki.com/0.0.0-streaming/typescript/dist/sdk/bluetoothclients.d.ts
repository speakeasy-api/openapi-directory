import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BluetoothClients {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return a Bluetooth client
     *
     * @remarks
     * Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.
     */
    getNetworkBluetoothClient(req: operations.GetNetworkBluetoothClientRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkBluetoothClientResponse>;
    /**
     * List the Bluetooth clients seen by APs in this network
     *
     * @remarks
     * List the Bluetooth clients seen by APs in this network
     */
    getNetworkBluetoothClients(req: operations.GetNetworkBluetoothClientsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkBluetoothClientsResponse>;
}
