package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRateLimitRequest {
    public String serverURL;
    public UpdateRateLimitRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateRateLimitPathParams pathParams;
    public UpdateRateLimitRequest withPathParams(UpdateRateLimitPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateRateLimitUpdateRateLimitRequest request;
    public UpdateRateLimitRequest withRequest(UpdateRateLimitUpdateRateLimitRequest request) {
        this.request = request;
        return this;
    }
    public UpdateRateLimitSecurity security;
    public UpdateRateLimitRequest withSecurity(UpdateRateLimitSecurity security) {
        this.security = security;
        return this;
    }
}