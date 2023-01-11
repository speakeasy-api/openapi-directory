package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateRatePlanRequest {
    public String serverURL;
    public UpdateRatePlanRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateRatePlanPathParams pathParams;
    public UpdateRatePlanRequest withPathParams(UpdateRatePlanPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateRatePlanUpdateRatePlanRequest request;
    public UpdateRatePlanRequest withRequest(UpdateRatePlanUpdateRatePlanRequest request) {
        this.request = request;
        return this;
    }
    public UpdateRatePlanSecurity security;
    public UpdateRatePlanRequest withSecurity(UpdateRatePlanSecurity security) {
        this.security = security;
        return this;
    }
}