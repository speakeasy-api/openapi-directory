package openapisdk.models.operations;



public class FetchExportConfigurationRequest {
    public String serverURL;
    public FetchExportConfigurationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchExportConfigurationPathParams pathParams;
    public FetchExportConfigurationRequest withPathParams(FetchExportConfigurationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchExportConfigurationSecurity security;
    public FetchExportConfigurationRequest withSecurity(FetchExportConfigurationSecurity security) {
        this.security = security;
        return this;
    }
}