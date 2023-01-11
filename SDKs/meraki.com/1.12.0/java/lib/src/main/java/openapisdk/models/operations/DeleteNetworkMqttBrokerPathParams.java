package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNetworkMqttBrokerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=mqttBrokerId")
    public String mqttBrokerId;
    public DeleteNetworkMqttBrokerPathParams withMqttBrokerId(String mqttBrokerId) {
        this.mqttBrokerId = mqttBrokerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public DeleteNetworkMqttBrokerPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}