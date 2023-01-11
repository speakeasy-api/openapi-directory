package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AppsScopeTokenRequest {
    public AppsScopeTokenPathParams pathParams;
    public AppsScopeTokenRequest withPathParams(AppsScopeTokenPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AppsScopeTokenRequestBody request;
    public AppsScopeTokenRequest withRequest(AppsScopeTokenRequestBody request) {
        this.request = request;
        return this;
    }
}