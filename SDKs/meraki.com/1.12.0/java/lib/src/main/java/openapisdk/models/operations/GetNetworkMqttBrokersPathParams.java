package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkMqttBrokersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkMqttBrokersPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}