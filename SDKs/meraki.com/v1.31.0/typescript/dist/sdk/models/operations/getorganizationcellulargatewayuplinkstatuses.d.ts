import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOrganizationCellularGatewayUplinkStatusesRequest extends SpeakeasyBase {
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
 * Tower Signal Status
 */
export declare class GetOrganizationCellularGatewayUplinkStatuses200ApplicationJSONUplinksSignalStat extends SpeakeasyBase {
    /**
     * Reference Signal Received Power
     */
    rsrp?: string;
    /**
     * Reference Signal Received Quality
     */
    rsrq?: string;
}
export declare class GetOrganizationCellularGatewayUplinkStatuses200ApplicationJSONUplinks extends SpeakeasyBase {
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
    interface?: string;
    /**
     * Uplink IP
     */
    ip?: string;
    /**
     * Uplink model
     */
    model?: string;
    /**
     * Network Provider
     */
    provider?: string;
    /**
     * Public IP
     */
    publicIp?: string;
    /**
     * Tower Signal Status
     */
    signalStat?: GetOrganizationCellularGatewayUplinkStatuses200ApplicationJSONUplinksSignalStat;
    /**
     * Signal Type
     */
    signalType?: string;
    /**
     * Uplink status
     */
    status?: string;
}
export declare class GetOrganizationCellularGatewayUplinkStatuses200ApplicationJSON extends SpeakeasyBase {
    /**
     * Last reported time for the device
     */
    lastReportedAt?: Date;
    /**
     * Device model
     */
    model?: string;
    /**
     * Network Id
     */
    networkId?: string;
    /**
     * Serial number of the device
     */
    serial?: string;
    /**
     * Uplinks info
     */
    uplinks?: GetOrganizationCellularGatewayUplinkStatuses200ApplicationJSONUplinks[];
}
export declare class GetOrganizationCellularGatewayUplinkStatusesResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getOrganizationCellularGatewayUplinkStatuses200ApplicationJSONObjects?: GetOrganizationCellularGatewayUplinkStatuses200ApplicationJSON[];
}
