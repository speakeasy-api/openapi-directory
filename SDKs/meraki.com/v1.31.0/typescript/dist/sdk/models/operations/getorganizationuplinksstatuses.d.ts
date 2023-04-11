import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationUplinksStatusesRequest extends SpeakeasyBase {
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    /**
     * A list of ICCIDs. The returned devices will be filtered to only include these ICCIDs.
     */
    iccids?: string[];
    /**
     * A list of network IDs. The returned devices will be filtered to only include these networks.
     */
    networkIds?: string[];
    organizationId: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
     */
    perPage?: number;
    /**
     * A list of serial numbers. The returned devices will be filtered to only include these serials.
     */
    serials?: string[];
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    startingAfter?: string;
}
/**
 * Uplink interface
 */
export declare enum GetOrganizationUplinksStatuses200ApplicationJSONUplinksInterfaceEnum {
    Cellular = "cellular",
    Wan1 = "wan1",
    Wan2 = "wan2"
}
/**
 * Tower Signal Status
 */
export declare class GetOrganizationUplinksStatuses200ApplicationJSONUplinksSignalStat extends SpeakeasyBase {
    /**
     * Reference Signal Received Power
     */
    rsrp?: string;
    /**
     * Reference Signal Received Quality
     */
    rsrq?: string;
}
/**
 * Uplink status
 */
export declare enum GetOrganizationUplinksStatuses200ApplicationJSONUplinksStatusEnum {
    Active = "active",
    Connecting = "connecting",
    Failed = "failed",
    NotConnected = "not connected",
    Ready = "ready"
}
export declare class GetOrganizationUplinksStatuses200ApplicationJSONUplinks extends SpeakeasyBase {
    /**
     * Access Point Name
     */
    apn?: string;
    /**
     * Connection Type
     */
    connectionType?: string;
    /**
     * Primary DNS IP
     */
    dns1?: string;
    /**
     * Secondary DNS IP
     */
    dns2?: string;
    /**
     * Gateway IP
     */
    gateway?: string;
    /**
     * Integrated Circuit Card Identification Number
     */
    iccid?: string;
    /**
     * Uplink interface
     */
    interface?: GetOrganizationUplinksStatuses200ApplicationJSONUplinksInterfaceEnum;
    /**
     * Uplink IP
     */
    ip?: string;
    /**
     * The way in which the IP is assigned
     */
    ipAssignedBy?: string;
    /**
     * Primary DNS IP
     */
    primaryDns?: string;
    /**
     * Network Provider
     */
    provider?: string;
    /**
     * Public IP
     */
    publicIp?: string;
    /**
     * Secondary DNS IP
     */
    secondaryDns?: string;
    /**
     * Tower Signal Status
     */
    signalStat?: GetOrganizationUplinksStatuses200ApplicationJSONUplinksSignalStat;
    /**
     * Signal Type
     */
    signalType?: string;
    /**
     * Uplink status
     */
    status?: GetOrganizationUplinksStatuses200ApplicationJSONUplinksStatusEnum;
}
export declare class GetOrganizationUplinksStatuses200ApplicationJSON extends SpeakeasyBase {
    /**
     * Last reported time for the device
     */
    lastReportedAt?: Date;
    /**
     * The uplink model
     */
    model?: string;
    /**
     * Network identifier
     */
    networkId?: string;
    /**
     * The uplink serial
     */
    serial?: string;
    /**
     * Uplinks
     */
    uplinks?: GetOrganizationUplinksStatuses200ApplicationJSONUplinks[];
}
export declare class GetOrganizationUplinksStatusesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationUplinksStatuses200ApplicationJSONObjects?: GetOrganizationUplinksStatuses200ApplicationJSON[];
}
