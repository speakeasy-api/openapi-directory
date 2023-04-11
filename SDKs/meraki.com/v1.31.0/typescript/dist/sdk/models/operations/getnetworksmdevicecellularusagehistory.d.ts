import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSmDeviceCellularUsageHistoryRequest extends SpeakeasyBase {
    deviceId: string;
    networkId: string;
}
export declare class GetNetworkSmDeviceCellularUsageHistory200ApplicationJSON extends SpeakeasyBase {
    /**
     * The amount of cellular data received by the device.
     */
    received?: number;
    /**
     * The amount of cellular sent received by the device.
     */
    sent?: number;
    /**
     * When the cellular usage data was collected.
     */
    ts?: string;
}
export declare class GetNetworkSmDeviceCellularUsageHistoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSmDeviceCellularUsageHistory200ApplicationJSONObjects?: GetNetworkSmDeviceCellularUsageHistory200ApplicationJSON[];
}
