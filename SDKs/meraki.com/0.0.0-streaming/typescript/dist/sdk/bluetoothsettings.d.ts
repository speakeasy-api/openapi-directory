import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BluetoothSettings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
     *
     * @remarks
     * Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
     */
    getNetworkBluetoothSettings(req: operations.GetNetworkBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkBluetoothSettingsResponse>;
    /**
     * Update the bluetooth settings for a wireless device
     *
     * @remarks
     * Update the bluetooth settings for a wireless device
     */
    updateDeviceWirelessBluetoothSettings(req: operations.UpdateDeviceWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceWirelessBluetoothSettingsResponse>;
    /**
     * Update the Bluetooth settings for a network
     *
     * @remarks
     * Update the Bluetooth settings for a network. See the docs page for <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a>.
     */
    updateNetworkBluetoothSettings(req: operations.UpdateNetworkBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkBluetoothSettingsResponse>;
}
