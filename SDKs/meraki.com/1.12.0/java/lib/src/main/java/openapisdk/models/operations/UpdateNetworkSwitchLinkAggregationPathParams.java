package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkSwitchLinkAggregationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=linkAggregationId")
    public String linkAggregationId;
    public UpdateNetworkSwitchLinkAggregationPathParams withLinkAggregationId(String linkAggregationId) {
        this.linkAggregationId = linkAggregationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkSwitchLinkAggregationPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}