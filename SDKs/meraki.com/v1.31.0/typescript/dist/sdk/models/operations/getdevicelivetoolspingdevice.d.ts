import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDeviceLiveToolsPingDeviceRequest extends SpeakeasyBase {
    id: string;
    serial: string;
}
/**
 * Ping request parameters
 */
export declare class GetDeviceLiveToolsPingDevice200ApplicationJSONRequest extends SpeakeasyBase {
    /**
     * Number of pings to send
     */
    count?: number;
    /**
     * Device serial number
     */
    serial?: string;
    /**
     * IP address or FQDN to ping
     */
    target?: string;
}
/**
 * Packet latency stats
 */
export declare class GetDeviceLiveToolsPingDevice200ApplicationJSONResultsLatencies extends SpeakeasyBase {
    /**
     * Average latency
     */
    average?: number;
    /**
     * Maximum latency
     */
    maximum?: number;
    /**
     * Minimum latency
     */
    minimum?: number;
}
/**
 * Lost packets
 */
export declare class GetDeviceLiveToolsPingDevice200ApplicationJSONResultsLoss extends SpeakeasyBase {
    /**
     * Percentage of packets lost
     */
    percentage?: number;
}
export declare class GetDeviceLiveToolsPingDevice200ApplicationJSONResultsReplies extends SpeakeasyBase {
    /**
     * Latency of the packet in milliseconds
     */
    latency?: number;
    /**
     * Sequence ID of the packet
     */
    sequenceId?: number;
    /**
     * Size of the packet in bytes
     */
    size?: number;
}
/**
 * Results of the ping request.
 */
export declare class GetDeviceLiveToolsPingDevice200ApplicationJSONResults extends SpeakeasyBase {
    /**
     * Packet latency stats
     */
    latencies?: GetDeviceLiveToolsPingDevice200ApplicationJSONResultsLatencies;
    /**
     * Lost packets
     */
    loss?: GetDeviceLiveToolsPingDevice200ApplicationJSONResultsLoss;
    /**
     * Number of packets received
     */
    received?: number;
    /**
     * Received packets
     */
    replies?: GetDeviceLiveToolsPingDevice200ApplicationJSONResultsReplies[];
    /**
     * Number of packets sent
     */
    sent?: number;
}
/**
 * Successful operation
 */
export declare class GetDeviceLiveToolsPingDevice200ApplicationJSON extends SpeakeasyBase {
    /**
     * Id to check the status of your ping request.
     */
    pingId?: string;
    /**
     * Ping request parameters
     */
    request?: GetDeviceLiveToolsPingDevice200ApplicationJSONRequest;
    /**
     * Results of the ping request.
     */
    results?: GetDeviceLiveToolsPingDevice200ApplicationJSONResults;
    /**
     * Status of the ping request.
     */
    status?: string;
    /**
     * GET this url to check the status of your ping request.
     */
    url?: string;
}
export declare class GetDeviceLiveToolsPingDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getDeviceLiveToolsPingDevice200ApplicationJSONObject?: GetDeviceLiveToolsPingDevice200ApplicationJSON;
}
