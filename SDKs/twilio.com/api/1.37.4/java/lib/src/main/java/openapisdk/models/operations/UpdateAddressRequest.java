package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAddressRequest {
    public String serverURL;
    public UpdateAddressRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateAddressPathParams pathParams;
    public UpdateAddressRequest withPathParams(UpdateAddressPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateAddressUpdateAddressRequest request;
    public UpdateAddressRequest withRequest(UpdateAddressUpdateAddressRequest request) {
        this.request = request;
        return this;
    }
    public UpdateAddressSecurity security;
    public UpdateAddressRequest withSecurity(UpdateAddressSecurity security) {
        this.security = security;
        return this;
    }
}