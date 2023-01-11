package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNetworkClientSplashAuthorizationStatusRequest {
    public UpdateNetworkClientSplashAuthorizationStatusPathParams pathParams;
    public UpdateNetworkClientSplashAuthorizationStatusRequest withPathParams(UpdateNetworkClientSplashAuthorizationStatusPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateNetworkClientSplashAuthorizationStatusRequestBody request;
    public UpdateNetworkClientSplashAuthorizationStatusRequest withRequest(UpdateNetworkClientSplashAuthorizationStatusRequestBody request) {
        this.request = request;
        return this;
    }
}