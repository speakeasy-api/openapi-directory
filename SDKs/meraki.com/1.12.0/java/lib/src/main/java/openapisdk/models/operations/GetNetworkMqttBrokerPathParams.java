package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkMqttBrokerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=mqttBrokerId")
    public String mqttBrokerId;
    public GetNetworkMqttBrokerPathParams withMqttBrokerId(String mqttBrokerId) {
        this.mqttBrokerId = mqttBrokerId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkMqttBrokerPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}