package openapisdk.models.operations;



public class DeleteMessagingConfigurationRequest {
    public String serverURL;
    public DeleteMessagingConfigurationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public DeleteMessagingConfigurationPathParams pathParams;
    public DeleteMessagingConfigurationRequest withPathParams(DeleteMessagingConfigurationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteMessagingConfigurationSecurity security;
    public DeleteMessagingConfigurationRequest withSecurity(DeleteMessagingConfigurationSecurity security) {
        this.security = security;
        return this;
    }
}