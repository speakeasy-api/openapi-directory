package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteUserFollowsNetworksNetworkIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=network_id")
    public Long networkId;
    public DeleteUserFollowsNetworksNetworkIdPathParams withNetworkId(Long networkId) {
        this.networkId = networkId;
        return this;
    }
}