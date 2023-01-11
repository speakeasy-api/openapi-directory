package openapisdk.models.operations;



public class FetchMessageInteractionRequest {
    public String serverURL;
    public FetchMessageInteractionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchMessageInteractionPathParams pathParams;
    public FetchMessageInteractionRequest withPathParams(FetchMessageInteractionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchMessageInteractionSecurity security;
    public FetchMessageInteractionRequest withSecurity(FetchMessageInteractionSecurity security) {
        this.security = security;
        return this;
    }
}