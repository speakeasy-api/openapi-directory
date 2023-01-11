package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateDefaultsRequest {
    public String serverURL;
    public UpdateDefaultsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateDefaultsPathParams pathParams;
    public UpdateDefaultsRequest withPathParams(UpdateDefaultsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateDefaultsUpdateDefaultsRequest request;
    public UpdateDefaultsRequest withRequest(UpdateDefaultsUpdateDefaultsRequest request) {
        this.request = request;
        return this;
    }
    public UpdateDefaultsSecurity security;
    public UpdateDefaultsRequest withSecurity(UpdateDefaultsSecurity security) {
        this.security = security;
        return this;
    }
}