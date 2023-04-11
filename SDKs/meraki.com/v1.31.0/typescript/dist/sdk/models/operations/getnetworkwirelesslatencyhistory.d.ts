import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Filter by access category.
 */
export declare enum GetNetworkWirelessLatencyHistoryAccessCategoryEnum {
    BackgroundTraffic = "backgroundTraffic",
    BestEffortTraffic = "bestEffortTraffic",
    VideoTraffic = "videoTraffic",
    VoiceTraffic = "voiceTraffic"
}
/**
 * Filter results by band (either '2.4', '5' or '6').
 */
export declare enum GetNetworkWirelessLatencyHistoryBandEnum {
    Two4 = "2.4",
    Five = "5",
    Six = "6"
}
export declare class GetNetworkWirelessLatencyHistoryRequest extends SpeakeasyBase {
    /**
     * Filter by access category.
     */
    accessCategory?: GetNetworkWirelessLatencyHistoryAccessCategoryEnum;
    /**
     * Filter results by AP tag.
     */
    apTag?: string;
    /**
     * Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false.
     */
    autoResolution?: boolean;
    /**
     * Filter results by band (either '2.4', '5' or '6').
     */
    band?: GetNetworkWirelessLatencyHistoryBandEnum;
    /**
     * Filter results by network client.
     */
    clientId?: string;
    /**
     * Filter results by device.
     */
    deviceSerial?: string;
    networkId: string;
    /**
     * The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400.
     */
    resolution?: number;
    /**
     * Filter results by SSID number.
     */
    ssid?: number;
    /**
     * The beginning of the timespan for the data. The maximum lookback period is 31 days from today.
     */
    t0?: string;
    /**
     * The end of the timespan for the data. t1 can be a maximum of 31 days after t0.
     */
    t1?: string;
    /**
     * The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days.
     */
    timespan?: number;
}
export declare class GetNetworkWirelessLatencyHistory200ApplicationJSON extends SpeakeasyBase {
    /**
     * Average latency in milliseconds
     */
    avgLatencyMs?: number;
    /**
     * The end time of the query range
     */
    endTs?: Date;
    /**
     * The start time of the query range
     */
    startTs?: Date;
}
export declare class GetNetworkWirelessLatencyHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkWirelessLatencyHistory200ApplicationJSONObjects?: GetNetworkWirelessLatencyHistory200ApplicationJSON[];
}
