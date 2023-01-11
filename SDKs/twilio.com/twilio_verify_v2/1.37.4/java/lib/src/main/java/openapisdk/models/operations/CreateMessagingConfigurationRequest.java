package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMessagingConfigurationRequest {
    public String serverURL;
    public CreateMessagingConfigurationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public CreateMessagingConfigurationPathParams pathParams;
    public CreateMessagingConfigurationRequest withPathParams(CreateMessagingConfigurationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public CreateMessagingConfigurationCreateMessagingConfigurationRequest request;
    public CreateMessagingConfigurationRequest withRequest(CreateMessagingConfigurationCreateMessagingConfigurationRequest request) {
        this.request = request;
        return this;
    }
    public CreateMessagingConfigurationSecurity security;
    public CreateMessagingConfigurationRequest withSecurity(CreateMessagingConfigurationSecurity security) {
        this.security = security;
        return this;
    }
}