import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkBluetoothClientRequest extends SpeakeasyBase {
    bluetoothClientId: string;
    /**
     * The timespan, in seconds, for the connectivityHistory data. By default 1 day, 86400, will be used.
     */
    connectivityHistoryTimespan?: number;
    /**
     * Include the connectivity history for this client
     */
    includeConnectivityHistory?: boolean;
    networkId: string;
}
export declare class GetNetworkBluetoothClientResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkBluetoothClient200ApplicationJSONObject?: Record<string, any>;
}
