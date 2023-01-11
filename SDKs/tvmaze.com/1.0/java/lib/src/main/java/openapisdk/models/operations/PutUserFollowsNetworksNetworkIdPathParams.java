package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutUserFollowsNetworksNetworkIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=network_id")
    public Long networkId;
    public PutUserFollowsNetworksNetworkIdPathParams withNetworkId(Long networkId) {
        this.networkId = networkId;
        return this;
    }
}