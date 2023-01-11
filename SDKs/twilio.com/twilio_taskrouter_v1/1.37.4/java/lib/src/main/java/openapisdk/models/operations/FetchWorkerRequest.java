package openapisdk.models.operations;



public class FetchWorkerRequest {
    public String serverURL;
    public FetchWorkerRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchWorkerPathParams pathParams;
    public FetchWorkerRequest withPathParams(FetchWorkerPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchWorkerSecurity security;
    public FetchWorkerRequest withSecurity(FetchWorkerSecurity security) {
        this.security = security;
        return this;
    }
}