import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceSwitchPortsStatusesRequest extends SpeakeasyBase {
    serial: string;
    /**
     * The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
     */
    t0?: string;
    /**
     * The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day.
     */
    timespan?: number;
}
/**
 * The Cisco Discovery Protocol (CDP) information of the connected device.
 */
export declare class GetDeviceSwitchPortsStatuses200ApplicationJSONCdp extends SpeakeasyBase {
    /**
     * Contains network addresses of both receiving and sending devices.
     */
    address?: string;
    /**
     * Identifies the device type, which indicates the functional capabilities of the device.
     */
    capabilities?: string;
    /**
     * Identifies the device name.
     */
    deviceId?: string;
    /**
     * The device's management IP.
     */
    managementAddress?: string;
    /**
     * Indicates, per interface, the assumed VLAN for untagged packets on the interface.
     */
    nativeVlan?: number;
    /**
     * Identifies the hardware platform of the device.
     */
    platform?: string;
    /**
     * Identifies the port from which the CDP packet was sent.
     */
    portId?: string;
    /**
     * The system name.
     */
    systemName?: string;
    /**
     * Contains the device software release information.
     */
    version?: string;
    /**
     * Advertises the configured VLAN Trunking Protocl (VTP)-management-domain name of the system.
     */
    vtpManagementDomain?: string;
}
/**
 * The current duplex of a connected port.
 */
export declare enum GetDeviceSwitchPortsStatuses200ApplicationJSONDuplexEnum {
    Unknown = "",
    Full = "full",
    Half = "half"
}
/**
 * The Link Layer Discovery Protocol (LLDP) information of the connected device.
 */
export declare class GetDeviceSwitchPortsStatuses200ApplicationJSONLldp extends SpeakeasyBase {
    /**
     * The device's chassis ID.
     */
    chassisId?: string;
    /**
     * The device's management IP.
     */
    managementAddress?: string;
    /**
     * The device's management VLAN.
     */
    managementVlan?: number;
    /**
     * Description of the port from which the LLDP packet was sent.
     */
    portDescription?: string;
    /**
     * Identifies the port from which the LLDP packet was sent
     */
    portId?: string;
    /**
     * The port's VLAN.
     */
    portVlan?: number;
    /**
     * Identifies the device type, which indicates the functional capabilities of the device.
     */
    systemCapabilities?: string;
    /**
     * The device's system description.
     */
    systemDescription?: string;
    /**
     * The device's system name.
     */
    systemName?: string;
}
/**
 * The current Secure Port status.
 */
export declare enum GetDeviceSwitchPortsStatuses200ApplicationJSONSecurePortAuthenticationStatusEnum {
    AuthenticationFailure = "Authentication failure",
    AuthenticationInProgress = "Authentication in progress",
    AuthenticationSuccessful = "Authentication successful",
    AuthenticationTimedOut = "Authentication timed out",
    Disabled = "Disabled",
    Enabled = "Enabled"
}
/**
 * The type of the  ('trunk' or 'access').
 */
export declare enum GetDeviceSwitchPortsStatuses200ApplicationJSONSecurePortConfigOverridesTypeEnum {
    Access = "access",
    Trunk = "trunk"
}
/**
 * The configuration overrides applied to this port when Secure Port is active.
 */
export declare class GetDeviceSwitchPortsStatuses200ApplicationJSONSecurePortConfigOverrides extends SpeakeasyBase {
    /**
     * The VLANs allowed on the . Only applicable to trunk ports.
     */
    allowedVlans?: string;
    /**
     * The type of the  ('trunk' or 'access').
     */
    type?: GetDeviceSwitchPortsStatuses200ApplicationJSONSecurePortConfigOverridesTypeEnum;
    /**
     * The VLAN of the . A null value will clear the value set for trunk ports.
     */
    vlan?: number;
    /**
     * The voice VLAN of the . Only applicable to access ports.
     */
    voiceVlan?: number;
}
/**
 * The Secure Port status of the port.
 */
export declare class GetDeviceSwitchPortsStatuses200ApplicationJSONSecurePort extends SpeakeasyBase {
    /**
     * Whether Secure Port is currently active for this port.
     */
    active?: boolean;
    /**
     * The current Secure Port status.
     */
    authenticationStatus?: GetDeviceSwitchPortsStatuses200ApplicationJSONSecurePortAuthenticationStatusEnum;
    /**
     * The configuration overrides applied to this port when Secure Port is active.
     */
    configOverrides?: GetDeviceSwitchPortsStatuses200ApplicationJSONSecurePortConfigOverrides;
    /**
     * Whether Secure Port is turned on for this port.
     */
    enabled?: boolean;
}
/**
 * The current data transfer rate which the port is operating at.
 */
export declare enum GetDeviceSwitchPortsStatuses200ApplicationJSONSpeedEnum {
    Unknown = "",
    OneGbps = "1 Gbps",
    TenGbps = "10 Gbps",
    TenMbps = "10 Mbps",
    OneHundredGbps = "100 Gbps",
    OneHundredMbps = "100 Mbps",
    Two5Gbps = "2.5 Gbps",
    TwentyGbps = "20 Gbps",
    FortyGbps = "40 Gbps",
    FiveGbps = "5 Gbps"
}
/**
 * The current connection status of the port.
 */
export declare enum GetDeviceSwitchPortsStatuses200ApplicationJSONStatusEnum {
    Connected = "Connected",
    Disabled = "Disabled",
    Disconnected = "Disconnected"
}
/**
 * A breakdown of the average speed of data that has passed through this port during the timespan.
 */
export declare class GetDeviceSwitchPortsStatuses200ApplicationJSONTrafficInKbps extends SpeakeasyBase {
    /**
     * The average speed of the data received (in kilobits-per-second).
     */
    recv?: number;
    /**
     * The average speed of the data sent (in kilobits-per-second).
     */
    sent?: number;
    /**
     * The average speed of the data sent and received (in kilobits-per-second).
     */
    total?: number;
}
/**
 * A breakdown of how many kilobytes have passed through this port during the timespan.
 */
export declare class GetDeviceSwitchPortsStatuses200ApplicationJSONUsageInKb extends SpeakeasyBase {
    /**
     * The amount of data received (in kilobytes).
     */
    recv?: number;
    /**
     * The amount of data sent (in kilobytes).
     */
    sent?: number;
    /**
     * The total amount of data sent and received (in kilobytes).
     */
    total?: number;
}
export declare class GetDeviceSwitchPortsStatuses200ApplicationJSON extends SpeakeasyBase {
    /**
     * The Cisco Discovery Protocol (CDP) information of the connected device.
     */
    cdp?: GetDeviceSwitchPortsStatuses200ApplicationJSONCdp;
    /**
     * The number of clients connected through this port.
     */
    clientCount?: number;
    /**
     * The current duplex of a connected port.
     */
    duplex?: GetDeviceSwitchPortsStatuses200ApplicationJSONDuplexEnum;
    /**
     * Whether the port is configured to be enabled.
     */
    enabled?: boolean;
    /**
     * All errors present on the port.
     */
    errors?: string[];
    /**
     * Whether the port is the switch's uplink.
     */
    isUplink?: boolean;
    /**
     * The Link Layer Discovery Protocol (LLDP) information of the connected device.
     */
    lldp?: GetDeviceSwitchPortsStatuses200ApplicationJSONLldp;
    /**
     * The string identifier of this port on the switch. This is commonly just the port number but may contain additional identifying information such as the slot and module-type if the port is located on a port module.
     */
    portId?: string;
    /**
     * How much power (in watt-hours) has been delivered by this port during the timespan.
     */
    powerUsageInWh?: number;
    /**
     * The Secure Port status of the port.
     */
    securePort?: GetDeviceSwitchPortsStatuses200ApplicationJSONSecurePort;
    /**
     * The current data transfer rate which the port is operating at.
     */
    speed?: GetDeviceSwitchPortsStatuses200ApplicationJSONSpeedEnum;
    /**
     * The current connection status of the port.
     */
    status?: GetDeviceSwitchPortsStatuses200ApplicationJSONStatusEnum;
    /**
     * A breakdown of the average speed of data that has passed through this port during the timespan.
     */
    trafficInKbps?: GetDeviceSwitchPortsStatuses200ApplicationJSONTrafficInKbps;
    /**
     * A breakdown of how many kilobytes have passed through this port during the timespan.
     */
    usageInKb?: GetDeviceSwitchPortsStatuses200ApplicationJSONUsageInKb;
    /**
     * All warnings present on the port.
     */
    warnings?: string[];
}
export declare class GetDeviceSwitchPortsStatusesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceSwitchPortsStatuses200ApplicationJSONObjects?: GetDeviceSwitchPortsStatuses200ApplicationJSON[];
}
