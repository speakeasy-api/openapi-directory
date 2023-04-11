import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The product type to fetch events for. This parameter is required for networks with multiple device types. Valid types are wireless, appliance, switch, systemsManager, camera, and cellularGateway
 */
export declare enum GetNetworkEventsProductTypeEnum {
    Appliance = "appliance",
    Camera = "camera",
    CellularGateway = "cellularGateway",
    Switch = "switch",
    SystemsManager = "systemsManager",
    Wireless = "wireless"
}
export declare class GetNetworkEventsRequest extends SpeakeasyBase {
    /**
     * The IP of the client which the list of events will be filtered with. Only supported for track-by-IP networks.
     */
    clientIp?: string;
    /**
     * The MAC address of the client which the list of events will be filtered with. Only supported for track-by-MAC networks.
     */
    clientMac?: string;
    /**
     * The name, or partial name, of the client which the list of events will be filtered with
     */
    clientName?: string;
    /**
     * The MAC address of the Meraki device which the list of events will be filtered with
     */
    deviceMac?: string;
    /**
     * The name of the Meraki device which the list of events will be filtered with
     */
    deviceName?: string;
    /**
     * The serial of the Meraki device which the list of events will be filtered with
     */
    deviceSerial?: string;
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    /**
     * A list of event types. The returned events will be filtered to exclude events with these types.
     */
    excludedEventTypes?: string[];
    /**
     * A list of event types. The returned events will be filtered to only include events with these types.
     */
    includedEventTypes?: string[];
    networkId: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10.
     */
    perPage?: number;
    /**
     * The product type to fetch events for. This parameter is required for networks with multiple device types. Valid types are wireless, appliance, switch, systemsManager, camera, and cellularGateway
     */
    productType?: GetNetworkEventsProductTypeEnum;
    /**
     * The MAC address of the Systems Manager device which the list of events will be filtered with
     */
    smDeviceMac?: string;
    /**
     * The name of the Systems Manager device which the list of events will be filtered with
     */
    smDeviceName?: string;
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    startingAfter?: string;
}
/**
 * An object containing more data related to the event.
 */
export declare class GetNetworkEvents200ApplicationJSONEventsEventData extends SpeakeasyBase {
    /**
     * The association ID of the client.
     */
    aid?: string;
    /**
     * The radio channel the client is connecting to.
     */
    channel?: string;
    /**
     * The client's IP address
     */
    clientIp?: string;
    /**
     * The client's MAC address
     */
    clientMac?: string;
    /**
     * The radio band number the client is trying to connect to.
     */
    radio?: string;
    /**
     * The current received signal strength indication (RSSI) of the client connected to an AP.
     */
    rssi?: string;
    /**
     * The virtual access point (VAP) number the client is connecting to.
     */
    vap?: string;
}
export declare class GetNetworkEvents200ApplicationJSONEvents extends SpeakeasyBase {
    /**
     * A description of the client. This is usually the client's device name.
     */
    clientDescription?: string;
    /**
     * A string identifying the client. This could be a client's MAC or IP address
     */
    clientId?: string;
    /**
     * The client's MAC address.
     */
    clientMac?: string;
    /**
     * A description of the event the happened.
     */
    description?: string;
    /**
     * The name of the device. Only shown if the device is an access point.
     */
    deviceName?: string;
    /**
     * The serial number of the device. Only shown if the device is an access point.
     */
    deviceSerial?: string;
    /**
     * An object containing more data related to the event.
     */
    eventData?: GetNetworkEvents200ApplicationJSONEventsEventData;
    /**
     * The ID of the network.
     */
    networkId?: string;
    /**
     * An UTC ISO8601 string of the time the event occurred at.
     */
    occurredAt?: string;
    /**
     * The SSID number of the device.
     */
    ssidNumber?: number;
    /**
     * The type of event being listed.
     */
    type?: string;
}
/**
 * Successful operation
 */
export declare class GetNetworkEvents200ApplicationJSON extends SpeakeasyBase {
    /**
     * An array of events that took place in the network.
     */
    events?: GetNetworkEvents200ApplicationJSONEvents[];
    /**
     * A message regarding the events sent. Usually 'null' unless there are no events
     */
    message?: string;
    /**
     * An UTC ISO8601 string of the latest occured at time of the listed events of the page.
     */
    pageEndAt?: string;
    /**
     * An UTC ISO8601 string of the earliest occured at time of the listed events of the page.
     */
    pageStartAt?: string;
}
export declare class GetNetworkEventsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkEvents200ApplicationJSONObject?: GetNetworkEvents200ApplicationJSON;
}
