package openapisdk.models.operations;



public class FetchMessageRequest {
    public String serverURL;
    public FetchMessageRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchMessagePathParams pathParams;
    public FetchMessageRequest withPathParams(FetchMessagePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchMessageSecurity security;
    public FetchMessageRequest withSecurity(FetchMessageSecurity security) {
        this.security = security;
        return this;
    }
}