package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConfigurationAddressRequest {
    public String serverURL;
    public UpdateConfigurationAddressRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateConfigurationAddressPathParams pathParams;
    public UpdateConfigurationAddressRequest withPathParams(UpdateConfigurationAddressPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateConfigurationAddressUpdateConfigurationAddressRequest request;
    public UpdateConfigurationAddressRequest withRequest(UpdateConfigurationAddressUpdateConfigurationAddressRequest request) {
        this.request = request;
        return this;
    }
    public UpdateConfigurationAddressSecurity security;
    public UpdateConfigurationAddressRequest withSecurity(UpdateConfigurationAddressSecurity security) {
        this.security = security;
        return this;
    }
}