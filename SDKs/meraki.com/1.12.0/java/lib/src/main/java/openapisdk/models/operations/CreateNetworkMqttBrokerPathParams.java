package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkMqttBrokerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public CreateNetworkMqttBrokerPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}