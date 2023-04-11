import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum {
    Afp = "AFP",
    AirPlay = "AirPlay",
    AllServices = "All Services",
    BitTorrent = "BitTorrent",
    Ftp = "FTP",
    Printers = "Printers",
    Ssh = "SSH",
    Samba = "Samba",
    Scanners = "Scanners",
    IChat = "iChat",
    ITunes = "iTunes"
}
export declare class UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules extends SpeakeasyBase {
    /**
     * A description for your Bonjour forwarding rule. Optional.
     */
    description?: string;
    /**
     * A list of Bonjour services. At least one service must be specified. Available services are 'All Services', 'AirPlay', 'AFP', 'BitTorrent', 'FTP', 'iChat', 'iTunes', 'Printers', 'Samba', 'Scanners' and 'SSH'
     */
    services: UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRulesServicesEnum[];
    /**
     * The ID of the service VLAN. Required.
     */
    vlanId: string;
}
export declare class UpdateNetworkWirelessSsidBonjourForwardingRequestBody extends SpeakeasyBase {
    /**
     * If true, Bonjour forwarding is enabled on this SSID.
     */
    enabled?: boolean;
    /**
     * List of bonjour forwarding rules.
     */
    rules?: UpdateNetworkWirelessSsidBonjourForwardingRequestBodyRules[];
}
export declare class UpdateNetworkWirelessSsidBonjourForwardingRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkWirelessSsidBonjourForwardingRequestBody;
    networkId: string;
    number: string;
}
export declare class UpdateNetworkWirelessSsidBonjourForwardingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkWirelessSsidBonjourForwarding200ApplicationJSONObject?: Record<string, any>;
}
