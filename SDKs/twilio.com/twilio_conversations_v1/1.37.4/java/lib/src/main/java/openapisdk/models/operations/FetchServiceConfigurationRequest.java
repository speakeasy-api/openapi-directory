package openapisdk.models.operations;



public class FetchServiceConfigurationRequest {
    public String serverURL;
    public FetchServiceConfigurationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchServiceConfigurationPathParams pathParams;
    public FetchServiceConfigurationRequest withPathParams(FetchServiceConfigurationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchServiceConfigurationSecurity security;
    public FetchServiceConfigurationRequest withSecurity(FetchServiceConfigurationSecurity security) {
        this.security = security;
        return this;
    }
}