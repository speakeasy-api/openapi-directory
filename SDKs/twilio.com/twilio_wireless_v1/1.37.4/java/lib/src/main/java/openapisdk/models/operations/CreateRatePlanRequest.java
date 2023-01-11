package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRatePlanRequest {
    public String serverURL;
    public CreateRatePlanRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateRatePlanCreateRatePlanRequest request;
    public CreateRatePlanRequest withRequest(CreateRatePlanCreateRatePlanRequest request) {
        this.request = request;
        return this;
    }
    public CreateRatePlanSecurity security;
    public CreateRatePlanRequest withSecurity(CreateRatePlanSecurity security) {
        this.security = security;
        return this;
    }
}