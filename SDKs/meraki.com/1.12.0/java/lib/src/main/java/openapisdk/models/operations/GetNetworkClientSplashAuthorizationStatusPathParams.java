package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetNetworkClientSplashAuthorizationStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=clientId")
    public String clientId;
    public GetNetworkClientSplashAuthorizationStatusPathParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public GetNetworkClientSplashAuthorizationStatusPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}