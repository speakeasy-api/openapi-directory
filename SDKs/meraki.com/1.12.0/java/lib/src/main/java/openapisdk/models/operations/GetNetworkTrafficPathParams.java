package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkTrafficPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkTrafficPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}