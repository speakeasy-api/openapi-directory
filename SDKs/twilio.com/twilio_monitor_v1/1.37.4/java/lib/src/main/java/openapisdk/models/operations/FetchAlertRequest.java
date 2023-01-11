package openapisdk.models.operations;



public class FetchAlertRequest {
    public String serverURL;
    public FetchAlertRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchAlertPathParams pathParams;
    public FetchAlertRequest withPathParams(FetchAlertPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchAlertSecurity security;
    public FetchAlertRequest withSecurity(FetchAlertSecurity security) {
        this.security = security;
        return this;
    }
}