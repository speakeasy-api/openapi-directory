import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkSsidsRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSsidsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkSsids200ApplicationJSONObjects?: Record<string, any>[];
}
