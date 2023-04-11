import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * TLS settings of the MQTT broker.
 */
export declare class CreateNetworkMqttBrokerRequestBodySecuritySecurity extends SpeakeasyBase {
    /**
     * CA Certificate of the MQTT broker.
     */
    caCertificate?: string;
    /**
     * Whether the TLS hostname verification is enabled for the MQTT broker.
     */
    verifyHostnames?: boolean;
}
/**
 * Security settings of the MQTT broker.
 */
export declare class CreateNetworkMqttBrokerRequestBodySecurity extends SpeakeasyBase {
    /**
     * Security protocol of the MQTT broker.
     */
    mode?: string;
    /**
     * TLS settings of the MQTT broker.
     */
    security?: CreateNetworkMqttBrokerRequestBodySecuritySecurity;
}
export declare class CreateNetworkMqttBrokerRequestBody extends SpeakeasyBase {
    /**
     * Authentication settings of the MQTT broker
     */
    authentication?: Record<string, any>;
    /**
     * Host name/IP address where the MQTT broker runs.
     */
    host: string;
    /**
     * Name of the MQTT broker.
     */
    name: string;
    /**
     * Host port though which the MQTT broker can be reached.
     */
    port: number;
    /**
     * Security settings of the MQTT broker.
     */
    security?: CreateNetworkMqttBrokerRequestBodySecurity;
}
export declare class CreateNetworkMqttBrokerRequest extends SpeakeasyBase {
    requestBody: CreateNetworkMqttBrokerRequestBody;
    networkId: string;
}
export declare class CreateNetworkMqttBrokerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    createNetworkMqttBroker201ApplicationJSONObject?: Record<string, any>;
}
