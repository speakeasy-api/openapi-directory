package openapisdk.models.operations;



public class FetchNetworkRequest {
    public String serverURL;
    public FetchNetworkRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchNetworkPathParams pathParams;
    public FetchNetworkRequest withPathParams(FetchNetworkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchNetworkSecurity security;
    public FetchNetworkRequest withSecurity(FetchNetworkSecurity security) {
        this.security = security;
        return this;
    }
}