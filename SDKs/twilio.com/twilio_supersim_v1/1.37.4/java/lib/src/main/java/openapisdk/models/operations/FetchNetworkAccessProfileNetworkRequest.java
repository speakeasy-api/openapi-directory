package openapisdk.models.operations;



public class FetchNetworkAccessProfileNetworkRequest {
    public String serverURL;
    public FetchNetworkAccessProfileNetworkRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchNetworkAccessProfileNetworkPathParams pathParams;
    public FetchNetworkAccessProfileNetworkRequest withPathParams(FetchNetworkAccessProfileNetworkPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchNetworkAccessProfileNetworkSecurity security;
    public FetchNetworkAccessProfileNetworkRequest withSecurity(FetchNetworkAccessProfileNetworkSecurity security) {
        this.security = security;
        return this;
    }
}