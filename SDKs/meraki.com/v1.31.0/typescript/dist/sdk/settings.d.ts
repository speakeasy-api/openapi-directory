import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Settings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return the uplink settings for an MX appliance
     *
     * @remarks
     * Return the uplink settings for an MX appliance
     */
    getDeviceApplianceUplinksSettings(req: operations.GetDeviceApplianceUplinksSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceApplianceUplinksSettingsResponse>;
    /**
     * Returns video settings for the given camera
     *
     * @remarks
     * Returns video settings for the given camera
     */
    getDeviceCameraVideoSettings(req: operations.GetDeviceCameraVideoSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraVideoSettingsResponse>;
    /**
     * Return the bluetooth settings for a wireless device
     *
     * @remarks
     * Return the bluetooth settings for a wireless device
     */
    getDeviceWirelessBluetoothSettings(req: operations.GetDeviceWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceWirelessBluetoothSettingsResponse>;
    /**
     * Return the radio settings of a device
     *
     * @remarks
     * Return the radio settings of a device
     */
    getDeviceWirelessRadioSettings(req: operations.GetDeviceWirelessRadioSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceWirelessRadioSettingsResponse>;
    /**
     * Return the alert configuration for this network
     *
     * @remarks
     * Return the alert configuration for this network
     */
    getNetworkAlertsSettings(req: operations.GetNetworkAlertsSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAlertsSettingsResponse>;
    /**
     * Return the firewall settings for this network
     *
     * @remarks
     * Return the firewall settings for this network
     */
    getNetworkApplianceFirewallSettings(req: operations.GetNetworkApplianceFirewallSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceFirewallSettingsResponse>;
    /**
     * Return the appliance settings for a network
     *
     * @remarks
     * Return the appliance settings for a network
     */
    getNetworkApplianceSettings(req: operations.GetNetworkApplianceSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceSettingsResponse>;
    /**
     * Returns the enabled status of VLANs for the network
     *
     * @remarks
     * Returns the enabled status of VLANs for the network
     */
    getNetworkApplianceVlansSettings(req: operations.GetNetworkApplianceVlansSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkApplianceVlansSettingsResponse>;
    /**
     * Return the settings for a network
     *
     * @remarks
     * Return the settings for a network
     */
    getNetworkSettings(req: operations.GetNetworkSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSettingsResponse>;
    /**
     * Returns the switch network settings
     *
     * @remarks
     * Returns the switch network settings
     */
    getNetworkSwitchSettings(req: operations.GetNetworkSwitchSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchSettingsResponse>;
    /**
     * Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
     *
     * @remarks
     * Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.
     */
    getNetworkWirelessBluetoothSettings(req: operations.GetNetworkWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessBluetoothSettingsResponse>;
    /**
     * Return the wireless settings for a network
     *
     * @remarks
     * Return the wireless settings for a network
     */
    getNetworkWirelessSettings(req: operations.GetNetworkWirelessSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSettingsResponse>;
    /**
     * Display the splash page settings for the given SSID
     *
     * @remarks
     * Display the splash page settings for the given SSID
     */
    getNetworkWirelessSsidSplashSettings(req: operations.GetNetworkWirelessSsidSplashSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSsidSplashSettingsResponse>;
    /**
     * Returns global adaptive policy settings in an organization
     *
     * @remarks
     * Returns global adaptive policy settings in an organization
     */
    getOrganizationAdaptivePolicySettings(req: operations.GetOrganizationAdaptivePolicySettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationAdaptivePolicySettingsResponse>;
    /**
     * Update the uplink settings for an MX appliance
     *
     * @remarks
     * Update the uplink settings for an MX appliance
     */
    updateDeviceApplianceUplinksSettings(req: operations.UpdateDeviceApplianceUplinksSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceApplianceUplinksSettingsResponse>;
    /**
     * Update video settings for the given camera
     *
     * @remarks
     * Update video settings for the given camera
     */
    updateDeviceCameraVideoSettings(req: operations.UpdateDeviceCameraVideoSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceCameraVideoSettingsResponse>;
    /**
     * Update the bluetooth settings for a wireless device
     *
     * @remarks
     * Update the bluetooth settings for a wireless device
     */
    updateDeviceWirelessBluetoothSettings(req: operations.UpdateDeviceWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceWirelessBluetoothSettingsResponse>;
    /**
     * Update the radio settings of a device
     *
     * @remarks
     * Update the radio settings of a device
     */
    updateDeviceWirelessRadioSettings(req: operations.UpdateDeviceWirelessRadioSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceWirelessRadioSettingsResponse>;
    /**
     * Update the alert configuration for this network
     *
     * @remarks
     * Update the alert configuration for this network
     */
    updateNetworkAlertsSettings(req: operations.UpdateNetworkAlertsSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkAlertsSettingsResponse>;
    /**
     * Update the firewall settings for this network
     *
     * @remarks
     * Update the firewall settings for this network
     */
    updateNetworkApplianceFirewallSettings(req: operations.UpdateNetworkApplianceFirewallSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceFirewallSettingsResponse>;
    /**
     * Update the appliance settings for a network
     *
     * @remarks
     * Update the appliance settings for a network
     */
    updateNetworkApplianceSettings(req: operations.UpdateNetworkApplianceSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceSettingsResponse>;
    /**
     * Enable/Disable VLANs for the given network
     *
     * @remarks
     * Enable/Disable VLANs for the given network
     */
    updateNetworkApplianceVlansSettings(req: operations.UpdateNetworkApplianceVlansSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkApplianceVlansSettingsResponse>;
    /**
     * Update the settings for a network
     *
     * @remarks
     * Update the settings for a network
     */
    updateNetworkSettings(req: operations.UpdateNetworkSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSettingsResponse>;
    /**
     * Update switch network settings
     *
     * @remarks
     * Update switch network settings
     */
    updateNetworkSwitchSettings(req: operations.UpdateNetworkSwitchSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchSettingsResponse>;
    /**
     * Update the Bluetooth settings for a network
     *
     * @remarks
     * Update the Bluetooth settings for a network. See the docs page for <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a>.
     */
    updateNetworkWirelessBluetoothSettings(req: operations.UpdateNetworkWirelessBluetoothSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessBluetoothSettingsResponse>;
    /**
     * Update the wireless settings for a network
     *
     * @remarks
     * Update the wireless settings for a network
     */
    updateNetworkWirelessSettings(req: operations.UpdateNetworkWirelessSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSettingsResponse>;
    /**
     * Modify the splash page settings for the given SSID
     *
     * @remarks
     * Modify the splash page settings for the given SSID
     */
    updateNetworkWirelessSsidSplashSettings(req: operations.UpdateNetworkWirelessSsidSplashSettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessSsidSplashSettingsResponse>;
    /**
     * Update global adaptive policy settings
     *
     * @remarks
     * Update global adaptive policy settings
     */
    updateOrganizationAdaptivePolicySettings(req: operations.UpdateOrganizationAdaptivePolicySettingsRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationAdaptivePolicySettingsResponse>;
}
