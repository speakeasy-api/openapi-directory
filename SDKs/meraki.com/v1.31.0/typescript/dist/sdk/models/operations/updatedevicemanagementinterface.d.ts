import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Enable or disable the interface (only for MX devices). Valid values are 'enabled', 'disabled', and 'not configured'.
 */
export declare enum UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum {
    Disabled = "disabled",
    Enabled = "enabled",
    NotConfigured = "not configured"
}
/**
 * WAN 1 settings
 */
export declare class UpdateDeviceManagementInterfaceRequestBodyWan1 extends SpeakeasyBase {
    /**
     * Up to two DNS IPs.
     */
    staticDns?: string[];
    /**
     * The IP of the gateway on the WAN.
     */
    staticGatewayIp?: string;
    /**
     * The IP the device should use on the WAN.
     */
    staticIp?: string;
    /**
     * The subnet mask for the WAN.
     */
    staticSubnetMask?: string;
    /**
     * Configure the interface to have static IP settings or use DHCP.
     */
    usingStaticIp?: boolean;
    /**
     * The VLAN that management traffic should be tagged with. Applies whether usingStaticIp is true or false.
     */
    vlan?: number;
    /**
     * Enable or disable the interface (only for MX devices). Valid values are 'enabled', 'disabled', and 'not configured'.
     */
    wanEnabled?: UpdateDeviceManagementInterfaceRequestBodyWan1WanEnabledEnum;
}
/**
 * Enable or disable the interface (only for MX devices). Valid values are 'enabled', 'disabled', and 'not configured'.
 */
export declare enum UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum {
    Disabled = "disabled",
    Enabled = "enabled",
    NotConfigured = "not configured"
}
/**
 * WAN 2 settings (only for MX devices)
 */
export declare class UpdateDeviceManagementInterfaceRequestBodyWan2 extends SpeakeasyBase {
    /**
     * Up to two DNS IPs.
     */
    staticDns?: string[];
    /**
     * The IP of the gateway on the WAN.
     */
    staticGatewayIp?: string;
    /**
     * The IP the device should use on the WAN.
     */
    staticIp?: string;
    /**
     * The subnet mask for the WAN.
     */
    staticSubnetMask?: string;
    /**
     * Configure the interface to have static IP settings or use DHCP.
     */
    usingStaticIp?: boolean;
    /**
     * The VLAN that management traffic should be tagged with. Applies whether usingStaticIp is true or false.
     */
    vlan?: number;
    /**
     * Enable or disable the interface (only for MX devices). Valid values are 'enabled', 'disabled', and 'not configured'.
     */
    wanEnabled?: UpdateDeviceManagementInterfaceRequestBodyWan2WanEnabledEnum;
}
export declare class UpdateDeviceManagementInterfaceRequestBody extends SpeakeasyBase {
    /**
     * WAN 1 settings
     */
    wan1?: UpdateDeviceManagementInterfaceRequestBodyWan1;
    /**
     * WAN 2 settings (only for MX devices)
     */
    wan2?: UpdateDeviceManagementInterfaceRequestBodyWan2;
}
export declare class UpdateDeviceManagementInterfaceRequest extends SpeakeasyBase {
    requestBody?: UpdateDeviceManagementInterfaceRequestBody;
    serial: string;
}
export declare class UpdateDeviceManagementInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateDeviceManagementInterface200ApplicationJSONObject?: Record<string, any>;
}
