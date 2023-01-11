package openapisdk.models.operations;



public class FetchConfigurationRequest {
    public String serverURL;
    public FetchConfigurationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchConfigurationSecurity security;
    public FetchConfigurationRequest withSecurity(FetchConfigurationSecurity security) {
        this.security = security;
        return this;
    }
}