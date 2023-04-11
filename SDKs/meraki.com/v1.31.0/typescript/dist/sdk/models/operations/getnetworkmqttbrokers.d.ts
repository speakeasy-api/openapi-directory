import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkMqttBrokersRequest extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkMqttBrokersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkMqttBrokers200ApplicationJSONObjects?: Record<string, any>[];
}
