package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkPiiSmOwnersForKeyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkPiiSmOwnersForKeyPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}