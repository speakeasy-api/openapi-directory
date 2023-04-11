import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationWirelessDevicesEthernetStatusesRequest extends SpeakeasyBase {
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    /**
     * A list of Meraki network IDs to filter results to contain only specified networks. E.g.: networkIds[]=N_12345678&networkIds[]=L_3456
     */
    networkIds?: string[];
    organizationId: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100.
     */
    perPage?: number;
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    startingAfter?: string;
}
/**
 * Aggregation details object
 */
export declare class GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONAggregation extends SpeakeasyBase {
    /**
     * Link Aggregation enabled flag
     */
    enabled?: boolean;
    /**
     * Link Aggregation speed
     */
    speed?: number;
}
/**
 * Network details object
 */
export declare class GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONNetwork extends SpeakeasyBase {
    /**
     * The network ID the AP is associated to
     */
    id?: string;
}
/**
 * Link negotiation details object for the port
 */
export declare class GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONPortsLinkNegotiation extends SpeakeasyBase {
    /**
     * The duplex mode of the port. Can be 'full' or 'half'
     */
    duplex?: string;
    /**
     * The speed of the port
     */
    speed?: number;
}
/**
 * PoE details object for the port
 */
export declare class GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONPortsPoe extends SpeakeasyBase {
    /**
     * The PoE Standard for the port. Can be '802.3at', '802.3af', '802.3bt', or null
     */
    standard?: string;
}
export declare class GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONPorts extends SpeakeasyBase {
    /**
     * Link negotiation details object for the port
     */
    linkNegotiation?: GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONPortsLinkNegotiation;
    /**
     * Label of the port
     */
    name?: string;
    /**
     * PoE details object for the port
     */
    poe?: GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONPortsPoe;
}
/**
 * AC power details object
 */
export declare class GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONPowerAc extends SpeakeasyBase {
    /**
     * AC power connected
     */
    isConnected?: boolean;
}
/**
 * PoE power details object
 */
export declare class GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONPowerPoe extends SpeakeasyBase {
    /**
     * PoE power connected
     */
    isConnected?: boolean;
}
/**
 * Power details object
 */
export declare class GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONPower extends SpeakeasyBase {
    /**
     * AC power details object
     */
    ac?: GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONPowerAc;
    /**
     * The PoE power mode for the AP. Can be 'full' or 'low'
     */
    mode?: string;
    /**
     * PoE power details object
     */
    poe?: GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONPowerPoe;
}
export declare class GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSON extends SpeakeasyBase {
    /**
     * Aggregation details object
     */
    aggregation?: GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONAggregation;
    /**
     * The name of the AP
     */
    name?: string;
    /**
     * Network details object
     */
    network?: GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONNetwork;
    /**
     * List of port details
     */
    ports?: GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONPorts[];
    /**
     * Power details object
     */
    power?: GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONPower;
    /**
     * The serial number of the AP
     */
    serial?: string;
}
export declare class GetOrganizationWirelessDevicesEthernetStatusesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationWirelessDevicesEthernetStatuses200ApplicationJSONObjects?: GetOrganizationWirelessDevicesEthernetStatuses200ApplicationJSON[];
}
