import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNetworkMqttBrokerRequest extends SpeakeasyBase {
    mqttBrokerId: string;
    networkId: string;
}
export declare class GetNetworkMqttBrokerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    getNetworkMqttBroker200ApplicationJSONObject?: Record<string, any>;
}
