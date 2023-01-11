package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceRequest {
    public String serverURL;
    public UpdateServiceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateServicePathParams pathParams;
    public UpdateServiceRequest withPathParams(UpdateServicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateServiceUpdateServiceRequest request;
    public UpdateServiceRequest withRequest(UpdateServiceUpdateServiceRequest request) {
        this.request = request;
        return this;
    }
    public UpdateServiceSecurity security;
    public UpdateServiceRequest withSecurity(UpdateServiceSecurity security) {
        this.security = security;
        return this;
    }
}