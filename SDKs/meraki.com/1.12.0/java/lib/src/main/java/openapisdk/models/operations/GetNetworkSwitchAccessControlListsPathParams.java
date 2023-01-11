package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkSwitchAccessControlListsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkSwitchAccessControlListsPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}