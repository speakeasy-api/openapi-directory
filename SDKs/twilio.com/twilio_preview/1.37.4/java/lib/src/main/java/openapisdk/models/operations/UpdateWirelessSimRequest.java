package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateWirelessSimRequest {
    public String serverURL;
    public UpdateWirelessSimRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateWirelessSimPathParams pathParams;
    public UpdateWirelessSimRequest withPathParams(UpdateWirelessSimPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateWirelessSimUpdateWirelessSimRequest request;
    public UpdateWirelessSimRequest withRequest(UpdateWirelessSimUpdateWirelessSimRequest request) {
        this.request = request;
        return this;
    }
    public UpdateWirelessSimSecurity security;
    public UpdateWirelessSimRequest withSecurity(UpdateWirelessSimSecurity security) {
        this.security = security;
        return this;
    }
}