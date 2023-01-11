package openapisdk.models.operations;



public class FetchAnnotationRequest {
    public String serverURL;
    public FetchAnnotationRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchAnnotationPathParams pathParams;
    public FetchAnnotationRequest withPathParams(FetchAnnotationPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchAnnotationSecurity security;
    public FetchAnnotationRequest withSecurity(FetchAnnotationSecurity security) {
        this.security = security;
        return this;
    }
}