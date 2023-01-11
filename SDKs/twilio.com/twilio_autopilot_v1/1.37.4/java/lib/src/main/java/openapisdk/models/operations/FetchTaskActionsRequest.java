package openapisdk.models.operations;



public class FetchTaskActionsRequest {
    public String serverURL;
    public FetchTaskActionsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchTaskActionsPathParams pathParams;
    public FetchTaskActionsRequest withPathParams(FetchTaskActionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchTaskActionsSecurity security;
    public FetchTaskActionsRequest withSecurity(FetchTaskActionsSecurity security) {
        this.security = security;
        return this;
    }
}