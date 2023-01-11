package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkPiiPiiKeysPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkPiiPiiKeysPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}