package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkSwitchLinkAggregationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkSwitchLinkAggregationsPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}