import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkMqttBrokerPathParams extends SpeakeasyBase {
    mqttBrokerId: string;
    networkId: string;
}
export declare class GetNetworkMqttBrokerRequest extends SpeakeasyBase {
    pathParams: GetNetworkMqttBrokerPathParams;
}
export declare class GetNetworkMqttBrokerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkMqttBroker200ApplicationJSONObject?: Record<string, any>;
}
