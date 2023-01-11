package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAddressRequest {
    public String serverURL;
    public CreateAddressRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateAddressPathParams pathParams;
    public CreateAddressRequest withPathParams(CreateAddressPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateAddressCreateAddressRequest request;
    public CreateAddressRequest withRequest(CreateAddressCreateAddressRequest request) {
        this.request = request;
        return this;
    }
    public CreateAddressSecurity security;
    public CreateAddressRequest withSecurity(CreateAddressSecurity security) {
        this.security = security;
        return this;
    }
}