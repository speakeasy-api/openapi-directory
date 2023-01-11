package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SplitNetworkPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public SplitNetworkPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}