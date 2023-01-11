package openapisdk.models.operations;



public class FetchNetworkAccessProfileRequest {
    public String serverURL;
    public FetchNetworkAccessProfileRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchNetworkAccessProfilePathParams pathParams;
    public FetchNetworkAccessProfileRequest withPathParams(FetchNetworkAccessProfilePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchNetworkAccessProfileSecurity security;
    public FetchNetworkAccessProfileRequest withSecurity(FetchNetworkAccessProfileSecurity security) {
        this.security = security;
        return this;
    }
}