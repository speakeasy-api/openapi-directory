package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMessagingConfigurationRequest {
    public String serverURL;
    public UpdateMessagingConfigurationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public UpdateMessagingConfigurationPathParams pathParams;
    public UpdateMessagingConfigurationRequest withPathParams(UpdateMessagingConfigurationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public UpdateMessagingConfigurationUpdateMessagingConfigurationRequest request;
    public UpdateMessagingConfigurationRequest withRequest(UpdateMessagingConfigurationUpdateMessagingConfigurationRequest request) {
        this.request = request;
        return this;
    }
    public UpdateMessagingConfigurationSecurity security;
    public UpdateMessagingConfigurationRequest withSecurity(UpdateMessagingConfigurationSecurity security) {
        this.security = security;
        return this;
    }
}