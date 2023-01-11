package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSipIpAddressRequest {
    public String serverURL;
    public CreateSipIpAddressRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateSipIpAddressPathParams pathParams;
    public CreateSipIpAddressRequest withPathParams(CreateSipIpAddressPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateSipIpAddressCreateSipIpAddressRequest request;
    public CreateSipIpAddressRequest withRequest(CreateSipIpAddressCreateSipIpAddressRequest request) {
        this.request = request;
        return this;
    }
    public CreateSipIpAddressSecurity security;
    public CreateSipIpAddressRequest withSecurity(CreateSipIpAddressSecurity security) {
        this.security = security;
        return this;
    }
}