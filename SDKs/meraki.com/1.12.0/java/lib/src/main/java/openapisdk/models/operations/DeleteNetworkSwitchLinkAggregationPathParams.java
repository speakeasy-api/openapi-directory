package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNetworkSwitchLinkAggregationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=linkAggregationId")
    public String linkAggregationId;
    public DeleteNetworkSwitchLinkAggregationPathParams withLinkAggregationId(String linkAggregationId) {
        this.linkAggregationId = linkAggregationId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public DeleteNetworkSwitchLinkAggregationPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}