package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateConfigurationRequest {
    public String serverURL;
    public UpdateConfigurationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateConfigurationUpdateConfigurationRequest request;
    public UpdateConfigurationRequest withRequest(UpdateConfigurationUpdateConfigurationRequest request) {
        this.request = request;
        return this;
    }
    public UpdateConfigurationSecurity security;
    public UpdateConfigurationRequest withSecurity(UpdateConfigurationSecurity security) {
        this.security = security;
        return this;
    }
}