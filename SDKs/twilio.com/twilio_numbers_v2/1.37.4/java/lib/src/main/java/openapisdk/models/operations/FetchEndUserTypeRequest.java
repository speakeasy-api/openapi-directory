package openapisdk.models.operations;



public class FetchEndUserTypeRequest {
    public String serverURL;
    public FetchEndUserTypeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchEndUserTypePathParams pathParams;
    public FetchEndUserTypeRequest withPathParams(FetchEndUserTypePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchEndUserTypeSecurity security;
    public FetchEndUserTypeRequest withSecurity(FetchEndUserTypeSecurity security) {
        this.security = security;
        return this;
    }
}