import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. Current connection state of the network.
 */
export declare enum GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum {
    NetworkConnectionStateUnspecified = "NETWORK_CONNECTION_STATE_UNSPECIFIED",
    Online = "ONLINE",
    Connected = "CONNECTED",
    Portal = "PORTAL",
    Connecting = "CONNECTING",
    NotConnected = "NOT_CONNECTED"
}
/**
 * Output only. Network connection type.
 */
export declare enum GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum {
    NetworkTypeUnspecified = "NETWORK_TYPE_UNSPECIFIED",
    Cellular = "CELLULAR",
    Ethernet = "ETHERNET",
    Tether = "TETHER",
    Vpn = "VPN",
    Wifi = "WIFI"
}
/**
 * State of visible/configured networks. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportNetworkStatus](https://chromeenterprise.google/policies/#ReportNetworkStatus) * Data Collection Frequency: 60 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: Yes
 */
export declare class GoogleChromeManagementV1NetworkStatusReport extends SpeakeasyBase {
    /**
     * Output only. Current connection state of the network.
     */
    connectionState?: GoogleChromeManagementV1NetworkStatusReportConnectionStateEnum;
    /**
     * Output only. Network connection type.
     */
    connectionType?: GoogleChromeManagementV1NetworkStatusReportConnectionTypeEnum;
    /**
     * Output only. Whether the wifi encryption key is turned off.
     */
    encryptionOn?: boolean;
    /**
     * Output only. Gateway IP address.
     */
    gatewayIpAddress?: string;
    /**
     * Output only. Network connection guid.
     */
    guid?: string;
    /**
     * Output only. LAN IP address.
     */
    lanIpAddress?: string;
    /**
     * Output only. Receiving bit rate measured in Megabits per second.
     */
    receivingBitRateMbps?: string;
    /**
     * Output only. Time at which the network state was reported.
     */
    reportTime?: string;
    /**
     * Output only. Frequency the report is sampled.
     */
    sampleFrequency?: string;
    /**
     * Output only. Signal strength for wireless networks measured in decibels.
     */
    signalStrengthDbm?: number;
    /**
     * Output only. Transmission bit rate measured in Megabits per second.
     */
    transmissionBitRateMbps?: string;
    /**
     * Output only. Transmission power measured in decibels.
     */
    transmissionPowerDbm?: number;
    /**
     * Output only. Wifi link quality. Value ranges from [0, 70]. 0 indicates no signal and 70 indicates a strong signal.
     */
    wifiLinkQuality?: string;
    /**
     * Output only. Wifi power management enabled
     */
    wifiPowerManagementEnabled?: boolean;
}
