import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MqttBrokers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add an MQTT broker
     *
     * @remarks
     * Add an MQTT broker
     */
    createNetworkMqttBroker(req: operations.CreateNetworkMqttBrokerRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkMqttBrokerResponse>;
    /**
     * Delete an MQTT broker
     *
     * @remarks
     * Delete an MQTT broker
     */
    deleteNetworkMqttBroker(req: operations.DeleteNetworkMqttBrokerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkMqttBrokerResponse>;
    /**
     * Return an MQTT broker
     *
     * @remarks
     * Return an MQTT broker
     */
    getNetworkMqttBroker(req: operations.GetNetworkMqttBrokerRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkMqttBrokerResponse>;
    /**
     * List the MQTT brokers for this network
     *
     * @remarks
     * List the MQTT brokers for this network
     */
    getNetworkMqttBrokers(req: operations.GetNetworkMqttBrokersRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkMqttBrokersResponse>;
    /**
     * Update an MQTT broker
     *
     * @remarks
     * Update an MQTT broker
     */
    updateNetworkMqttBroker(req: operations.UpdateNetworkMqttBrokerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkMqttBrokerResponse>;
}
