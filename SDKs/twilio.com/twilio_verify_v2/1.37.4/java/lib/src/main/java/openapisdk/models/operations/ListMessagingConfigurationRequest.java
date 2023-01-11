package openapisdk.models.operations;



public class ListMessagingConfigurationRequest {
    public String serverURL;
    public ListMessagingConfigurationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public ListMessagingConfigurationPathParams pathParams;
    public ListMessagingConfigurationRequest withPathParams(ListMessagingConfigurationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListMessagingConfigurationQueryParams queryParams;
    public ListMessagingConfigurationRequest withQueryParams(ListMessagingConfigurationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListMessagingConfigurationSecurity security;
    public ListMessagingConfigurationRequest withSecurity(ListMessagingConfigurationSecurity security) {
        this.security = security;
        return this;
    }
}