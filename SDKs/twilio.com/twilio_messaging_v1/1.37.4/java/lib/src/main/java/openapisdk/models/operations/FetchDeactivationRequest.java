package openapisdk.models.operations;



public class FetchDeactivationRequest {
    public String serverURL;
    public FetchDeactivationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchDeactivationQueryParams queryParams;
    public FetchDeactivationRequest withQueryParams(FetchDeactivationQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FetchDeactivationSecurity security;
    public FetchDeactivationRequest withSecurity(FetchDeactivationSecurity security) {
        this.security = security;
        return this;
    }
}