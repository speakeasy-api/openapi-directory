import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * TLS settings of the MQTT broker.
 */
export declare class UpdateNetworkMqttBrokerRequestBodySecuritySecurity extends SpeakeasyBase {
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
export declare class UpdateNetworkMqttBrokerRequestBodySecurity extends SpeakeasyBase {
    /**
     * Security protocol of the MQTT broker.
     */
    mode?: string;
    /**
     * TLS settings of the MQTT broker.
     */
    security?: UpdateNetworkMqttBrokerRequestBodySecuritySecurity;
}
export declare class UpdateNetworkMqttBrokerRequestBody extends SpeakeasyBase {
    /**
     * Authentication settings of the MQTT broker
     */
    authentication?: Record<string, any>;
    /**
     * Host name/IP address where the MQTT broker runs.
     */
    host?: string;
    /**
     * Name of the MQTT broker.
     */
    name?: string;
    /**
     * Host port though which the MQTT broker can be reached.
     */
    port?: number;
    /**
     * Security settings of the MQTT broker.
     */
    security?: UpdateNetworkMqttBrokerRequestBodySecurity;
}
export declare class UpdateNetworkMqttBrokerRequest extends SpeakeasyBase {
    requestBody?: UpdateNetworkMqttBrokerRequestBody;
    mqttBrokerId: string;
    networkId: string;
}
export declare class UpdateNetworkMqttBrokerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful operation
     */
    updateNetworkMqttBroker200ApplicationJSONObject?: Record<string, any>;
}
