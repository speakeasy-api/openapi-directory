package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWirelessRatePlanRequest {
    public String serverURL;
    public CreateWirelessRatePlanRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateWirelessRatePlanCreateWirelessRatePlanRequest request;
    public CreateWirelessRatePlanRequest withRequest(CreateWirelessRatePlanCreateWirelessRatePlanRequest request) {
        this.request = request;
        return this;
    }
    public CreateWirelessRatePlanSecurity security;
    public CreateWirelessRatePlanRequest withSecurity(CreateWirelessRatePlanSecurity security) {
        this.security = security;
        return this;
    }
}