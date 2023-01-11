package openapisdk.models.operations;



public class FetchInteractionRequest {
    public String serverURL;
    public FetchInteractionRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchInteractionPathParams pathParams;
    public FetchInteractionRequest withPathParams(FetchInteractionPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchInteractionSecurity security;
    public FetchInteractionRequest withSecurity(FetchInteractionSecurity security) {
        this.security = security;
        return this;
    }
}