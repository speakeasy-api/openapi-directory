package openapisdk.models.operations;



public class FetchTrunksRequest {
    public String serverURL;
    public FetchTrunksRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchTrunksPathParams pathParams;
    public FetchTrunksRequest withPathParams(FetchTrunksPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchTrunksSecurity security;
    public FetchTrunksRequest withSecurity(FetchTrunksSecurity security) {
        this.security = security;
        return this;
    }
}