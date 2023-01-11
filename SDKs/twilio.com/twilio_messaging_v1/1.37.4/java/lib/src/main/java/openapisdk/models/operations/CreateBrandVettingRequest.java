package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBrandVettingRequest {
    public String serverURL;
    public CreateBrandVettingRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateBrandVettingPathParams pathParams;
    public CreateBrandVettingRequest withPathParams(CreateBrandVettingPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateBrandVettingCreateBrandVettingRequest request;
    public CreateBrandVettingRequest withRequest(CreateBrandVettingCreateBrandVettingRequest request) {
        this.request = request;
        return this;
    }
    public CreateBrandVettingSecurity security;
    public CreateBrandVettingRequest withSecurity(CreateBrandVettingSecurity security) {
        this.security = security;
        return this;
    }
}