package openapisdk.models.operations;



public class FetchTrunkingNumberRequest {
    public String serverURL;
    public FetchTrunkingNumberRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchTrunkingNumberPathParams pathParams;
    public FetchTrunkingNumberRequest withPathParams(FetchTrunkingNumberPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchTrunkingNumberQueryParams queryParams;
    public FetchTrunkingNumberRequest withQueryParams(FetchTrunkingNumberQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public FetchTrunkingNumberSecurity security;
    public FetchTrunkingNumberRequest withSecurity(FetchTrunkingNumberSecurity security) {
        this.security = security;
        return this;
    }
}