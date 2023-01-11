package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateConfigurationAddressRequest {
    public String serverURL;
    public CreateConfigurationAddressRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateConfigurationAddressCreateConfigurationAddressRequest request;
    public CreateConfigurationAddressRequest withRequest(CreateConfigurationAddressCreateConfigurationAddressRequest request) {
        this.request = request;
        return this;
    }
    public CreateConfigurationAddressSecurity security;
    public CreateConfigurationAddressRequest withSecurity(CreateConfigurationAddressSecurity security) {
        this.security = security;
        return this;
    }
}