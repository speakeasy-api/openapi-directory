package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWirelessRatePlanRequest {
    public String serverURL;
    public UpdateWirelessRatePlanRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateWirelessRatePlanPathParams pathParams;
    public UpdateWirelessRatePlanRequest withPathParams(UpdateWirelessRatePlanPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateWirelessRatePlanUpdateWirelessRatePlanRequest request;
    public UpdateWirelessRatePlanRequest withRequest(UpdateWirelessRatePlanUpdateWirelessRatePlanRequest request) {
        this.request = request;
        return this;
    }
    public UpdateWirelessRatePlanSecurity security;
    public UpdateWirelessRatePlanRequest withSecurity(UpdateWirelessRatePlanSecurity security) {
        this.security = security;
        return this;
    }
}