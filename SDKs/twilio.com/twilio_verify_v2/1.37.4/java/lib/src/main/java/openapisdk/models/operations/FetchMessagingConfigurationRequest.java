package openapisdk.models.operations;



public class FetchMessagingConfigurationRequest {
    public String serverURL;
    public FetchMessagingConfigurationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchMessagingConfigurationPathParams pathParams;
    public FetchMessagingConfigurationRequest withPathParams(FetchMessagingConfigurationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchMessagingConfigurationSecurity security;
    public FetchMessagingConfigurationRequest withSecurity(FetchMessagingConfigurationSecurity security) {
        this.security = security;
        return this;
    }
}