import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkWirelessSsidsRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkWirelessSsidsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkWirelessSsids200ApplicationJSONObjects?: Record<string, any>[];
}
