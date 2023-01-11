package openapisdk.models.operations;



public class FetchFlowRevisionRequest {
    public String serverURL;
    public FetchFlowRevisionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchFlowRevisionPathParams pathParams;
    public FetchFlowRevisionRequest withPathParams(FetchFlowRevisionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchFlowRevisionSecurity security;
    public FetchFlowRevisionRequest withSecurity(FetchFlowRevisionSecurity security) {
        this.security = security;
        return this;
    }
}