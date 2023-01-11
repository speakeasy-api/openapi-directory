package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkNetflowPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkNetflowPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}