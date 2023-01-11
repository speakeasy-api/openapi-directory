package openapisdk.models.operations;



public class FetchTaskRequest {
    public String serverURL;
    public FetchTaskRequest withServerUrl(String serverURL) {
        this.serverURL = serverURL;
        return this;
    }
    public FetchTaskPathParams pathParams;
    public FetchTaskRequest withPathParams(FetchTaskPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public FetchTaskSecurity security;
    public FetchTaskRequest withSecurity(FetchTaskSecurity security) {
        this.security = security;
        return this;
    }
}