package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkClientSplashAuthorizationStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=clientId")
    public String clientId;
    public UpdateNetworkClientSplashAuthorizationStatusPathParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=networkId")
    public String networkId;
    public UpdateNetworkClientSplashAuthorizationStatusPathParams withNetworkId(String networkId) {
        this.networkId = networkId;
        return this;
    }
}