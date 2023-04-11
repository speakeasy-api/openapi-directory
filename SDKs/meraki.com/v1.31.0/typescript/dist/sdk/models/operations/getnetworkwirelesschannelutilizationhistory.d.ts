import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Filter results by band (either '2.4', '5' or '6').
 */
export declare enum GetNetworkWirelessChannelUtilizationHistoryBandEnum {
    Two4 = "2.4",
    Five = "5",
    Six = "6"
}
export declare class GetNetworkWirelessChannelUtilizationHistoryRequest extends SpeakeasyBase {
    /**
     * Filter results by AP tag to return AP channel utilization metrics for devices labeled with the given tag; either :clientId or :deviceSerial must be jointly specified.
     */
    apTag?: string;
    /**
     * Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false.
     */
    autoResolution?: boolean;
    /**
     * Filter results by band (either '2.4', '5' or '6').
     */
    band?: GetNetworkWirelessChannelUtilizationHistoryBandEnum;
    /**
     * Filter results by network client to return per-device, per-band AP channel utilization metrics inner joined by the queried client's connection history.
     */
    clientId?: string;
    /**
     * Filter results by device to return AP channel utilization metrics for the queried device; either :band or :clientId must be jointly specified.
     */
    deviceSerial?: string;
    networkId: string;
    /**
     * The time resolution in seconds for returned data. The valid resolutions are: 600, 1200, 3600, 14400, 86400. The default is 86400.
     */
    resolution?: number;
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
export declare class GetNetworkWirelessChannelUtilizationHistory200ApplicationJSON extends SpeakeasyBase {
    /**
     * The end time of the query range
     */
    endTs?: Date;
    /**
     * The start time of the query range
     */
    startTs?: Date;
    /**
     * Average wifi utilization
     */
    utilization80211?: number;
    /**
     * Average signal interference
     */
    utilizationNon80211?: number;
    /**
     * Total channel utilization
     */
    utilizationTotal?: number;
}
export declare class GetNetworkWirelessChannelUtilizationHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkWirelessChannelUtilizationHistory200ApplicationJSONObjects?: GetNetworkWirelessChannelUtilizationHistory200ApplicationJSON[];
}
