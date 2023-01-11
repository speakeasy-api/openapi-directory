package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateTrustProductRequest {
    public String serverURL;
    public UpdateTrustProductRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateTrustProductPathParams pathParams;
    public UpdateTrustProductRequest withPathParams(UpdateTrustProductPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateTrustProductUpdateTrustProductRequest request;
    public UpdateTrustProductRequest withRequest(UpdateTrustProductUpdateTrustProductRequest request) {
        this.request = request;
        return this;
    }
    public UpdateTrustProductSecurity security;
    public UpdateTrustProductRequest withSecurity(UpdateTrustProductSecurity security) {
        this.security = security;
        return this;
    }
}