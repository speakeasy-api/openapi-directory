package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateServiceConfigurationRequest {
    public String serverURL;
    public UpdateServiceConfigurationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateServiceConfigurationPathParams pathParams;
    public UpdateServiceConfigurationRequest withPathParams(UpdateServiceConfigurationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateServiceConfigurationUpdateServiceConfigurationRequest request;
    public UpdateServiceConfigurationRequest withRequest(UpdateServiceConfigurationUpdateServiceConfigurationRequest request) {
        this.request = request;
        return this;
    }
    public UpdateServiceConfigurationSecurity security;
    public UpdateServiceConfigurationRequest withSecurity(UpdateServiceConfigurationSecurity security) {
        this.security = security;
        return this;
    }
}