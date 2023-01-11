package openapisdk.models.operations;



public class FetchServiceRequest {
    public String serverURL;
    public FetchServiceRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchServicePathParams pathParams;
    public FetchServiceRequest withPathParams(FetchServicePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchServiceSecurity security;
    public FetchServiceRequest withSecurity(FetchServiceSecurity security) {
        this.security = security;
        return this;
    }
}