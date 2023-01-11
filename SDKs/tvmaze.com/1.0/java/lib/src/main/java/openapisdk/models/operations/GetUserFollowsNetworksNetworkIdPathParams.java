package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserFollowsNetworksNetworkIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=network_id")
    public Long networkId;
    public GetUserFollowsNetworksNetworkIdPathParams withNetworkId(Long networkId) {
        this.networkId = networkId;
        return this;
    }
}