package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkEventsEventTypesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkEventsEventTypesPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}