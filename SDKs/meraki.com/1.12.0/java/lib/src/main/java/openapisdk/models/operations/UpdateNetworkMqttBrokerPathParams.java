package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkMqttBrokerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=mqttBrokerId")
    public String mqttBrokerId;
    public UpdateNetworkMqttBrokerPathParams withMqttBrokerId(String mqttBrokerId) {
        this.mqttBrokerId = mqttBrokerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkMqttBrokerPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}