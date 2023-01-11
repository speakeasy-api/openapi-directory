package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkSplashLoginAttemptsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkSplashLoginAttemptsPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}