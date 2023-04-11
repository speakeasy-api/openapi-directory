import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSmDevicePerformanceHistoryRequest extends SpeakeasyBase {
    deviceId: string;
    /**
     * A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    endingBefore?: string;
    networkId: string;
    /**
     * The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000.
     */
    perPage?: number;
    /**
     * A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it.
     */
    startingAfter?: string;
}
/**
 * An object containing current disk usage details.
 */
export declare class GetNetworkSmDevicePerformanceHistory200ApplicationJSONDiskUsageC extends SpeakeasyBase {
    /**
     * The available disk space.
     */
    space?: number;
    /**
     * The used disk space.
     */
    used?: number;
}
/**
 * An object containing disk usage details.
 */
export declare class GetNetworkSmDevicePerformanceHistory200ApplicationJSONDiskUsage extends SpeakeasyBase {
    /**
     * An object containing current disk usage details.
     */
    c?: GetNetworkSmDevicePerformanceHistory200ApplicationJSONDiskUsageC;
}
export declare class GetNetworkSmDevicePerformanceHistory200ApplicationJSON extends SpeakeasyBase {
    /**
     * The percentage of CPU used as a decimal format.
     */
    cpuPercentUsed?: number;
    /**
     * An object containing disk usage details.
     */
    diskUsage?: GetNetworkSmDevicePerformanceHistory200ApplicationJSONDiskUsage;
    /**
     * The active RAM on the device.
     */
    memActive?: number;
    /**
     * Memory that is not yet in use by the system.
     */
    memFree?: number;
    /**
     * The inactive RAM on the device.
     */
    memInactive?: number;
    /**
     * Memory used for core OS functions on the device.
     */
    memWired?: number;
    /**
     * Network bandwith received.
     */
    networkReceived?: number;
    /**
     * Network bandwith transmitted.
     */
    networkSent?: number;
    /**
     * The amount of space being used on the startup disk to swap unused files to and from RAM.
     */
    swapUsed?: number;
    /**
     * The time at which the performance was measured.
     */
    ts?: string;
}
export declare class GetNetworkSmDevicePerformanceHistoryResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSmDevicePerformanceHistory200ApplicationJSONObjects?: GetNetworkSmDevicePerformanceHistory200ApplicationJSON[];
}
