package openapisdk.models.operations;



public class FetchFieldTypeRequest {
    public String serverURL;
    public FetchFieldTypeRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchFieldTypePathParams pathParams;
    public FetchFieldTypeRequest withPathParams(FetchFieldTypePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchFieldTypeSecurity security;
    public FetchFieldTypeRequest withSecurity(FetchFieldTypeSecurity security) {
        this.security = security;
        return this;
    }
}