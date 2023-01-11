package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRateLimitRequest {
    public String serverURL;
    public CreateRateLimitRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateRateLimitPathParams pathParams;
    public CreateRateLimitRequest withPathParams(CreateRateLimitPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateRateLimitCreateRateLimitRequest request;
    public CreateRateLimitRequest withRequest(CreateRateLimitCreateRateLimitRequest request) {
        this.request = request;
        return this;
    }
    public CreateRateLimitSecurity security;
    public CreateRateLimitRequest withSecurity(CreateRateLimitSecurity security) {
        this.security = security;
        return this;
    }
}