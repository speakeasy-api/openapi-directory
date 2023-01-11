package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSipIpAddressRequest {
    public String serverURL;
    public UpdateSipIpAddressRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateSipIpAddressPathParams pathParams;
    public UpdateSipIpAddressRequest withPathParams(UpdateSipIpAddressPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateSipIpAddressUpdateSipIpAddressRequest request;
    public UpdateSipIpAddressRequest withRequest(UpdateSipIpAddressUpdateSipIpAddressRequest request) {
        this.request = request;
        return this;
    }
    public UpdateSipIpAddressSecurity security;
    public UpdateSipIpAddressRequest withSecurity(UpdateSipIpAddressSecurity security) {
        this.security = security;
        return this;
    }
}