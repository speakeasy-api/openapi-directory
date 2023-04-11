import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkMqttBrokerRequest extends SpeakeasyBase {
    mqttBrokerId: string;
    networkId: string;
}
export declare class DeleteNetworkMqttBrokerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
