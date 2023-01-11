package openapisdk.models.operations;



public class FetchUnderstandTaskActionsRequest {
    public String serverURL;
    public FetchUnderstandTaskActionsRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchUnderstandTaskActionsPathParams pathParams;
    public FetchUnderstandTaskActionsRequest withPathParams(FetchUnderstandTaskActionsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchUnderstandTaskActionsSecurity security;
    public FetchUnderstandTaskActionsRequest withSecurity(FetchUnderstandTaskActionsSecurity security) {
        this.security = security;
        return this;
    }
}