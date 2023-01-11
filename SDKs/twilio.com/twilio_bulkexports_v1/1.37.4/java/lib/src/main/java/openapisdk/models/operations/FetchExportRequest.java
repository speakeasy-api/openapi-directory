package openapisdk.models.operations;



public class FetchExportRequest {
    public String serverURL;
    public FetchExportRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchExportPathParams pathParams;
    public FetchExportRequest withPathParams(FetchExportPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchExportSecurity security;
    public FetchExportRequest withSecurity(FetchExportSecurity security) {
        this.security = security;
        return this;
    }
}