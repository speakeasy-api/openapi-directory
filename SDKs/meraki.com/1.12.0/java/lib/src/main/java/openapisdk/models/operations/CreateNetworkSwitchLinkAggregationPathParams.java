package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateNetworkSwitchLinkAggregationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public CreateNetworkSwitchLinkAggregationPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}